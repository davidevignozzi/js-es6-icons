// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const icons = [
  { name: 'comment', prefix: 'fa fa-comment', type: 'reaction', family: '', },
  { name: 'thumbs up', prefix: 'fa fa-thumbs-up ', type: 'reaction', family: '', },
  { name: 'heart', prefix: 'fa fa-heart', type: 'reaction', family: '', },

  { name: 'car', prefix: 'fa fa-car', type: 'transport', family: '', },
  { name: 'plane', prefix: 'fa fa-plane', type: 'transport', family: '', },
  { name: 'train', prefix: 'fa fa-train', type: 'transport', family: '', },
  { name: 'subway', prefix: 'fa fa-subway', type: 'transport', family: '', },

  { name: 'ambulance', prefix: 'fa fa-ambulance', type: 'healty', family: '', },
  { name: 'stethoscope', prefix: 'fa fa-stethoscope', type: 'healty', family: '', },
  { name: 'medkit', prefix: 'fa fa-medkit', type: 'healty', family: '', },
]

const appContainer = document.getElementById('container'); // prendo il container

icons.forEach((element) => {

  appContainer.innerHTML +=
  `
    <div>
      <i class="${element.prefix}"></i>
      ${element.name}
    </div>
  `
});

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

const colors = ['blue', 'green', 'red']
const types = []

icons.forEach((element) => {
  if(!types.includes(element.type)) {
    types.push(element.type)
  }
})

// associo ad ogni tipo un colore
icons.forEach((element) => {
  const typeIndex = types.indexOf(element.type)

  if (typeIndex !== -1) {
    element.color = colors[typeIndex]
  }
})

const appContainerSecond = document.getElementById('container-second'); // prendo il secondo container

icons.forEach((element) => {

 appContainerSecond.innerHTML +=
 `
 <div>
   <i class="${element.prefix}" style="color:${element.color}"</i>
   <br>
   ${element.name}
 </div>
 `

})



// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
