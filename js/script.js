// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const icons = [
  { name: 'comment', prefix: 'fa fa-comment', type: 'reaction', family: '', },
  { name: 'thumbs', prefix: 'fa fa-thumbs-up ', type: 'reaction', family: '', },
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

const colors = [
  {color: 'blue', type: 'reaction'},
  {color: 'green', type: 'transport'},
  {color: 'red', type: 'healty'},
]

const newIcons = icons.map((element) => {

  // reaction === blue
  if (element.type === 'reaction') {
    return {...element, 'color': 'blue'}
  }

  // transport === green
  if (element.type === 'transport') {
    return {...element, 'color': 'green'}
  }

  // healty === red
  if (element.type === 'healty') {
    return {...element, 'color': 'red'}
  }

})

const appContainerSecond = document.getElementById('container-second'); //prendo il secondo container

newIcons.forEach((element) => {

  appContainerSecond.innerHTML +=
  `
  <div>
    <i class="${element.prefix}" style="color:${element.color}"</i>
    ${element.name}
  </div>
  `

})



// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
