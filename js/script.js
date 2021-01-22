//  ------------------------------------------------------------------------------ Milestone 1: ------------------------------------------------------------------------------------------
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const icons = [
  { name: 'comment', prefix: 'fa fa-comment', type: 'Reaction', family: '', },
  { name: 'thumbs up', prefix: 'fa fa-thumbs-up ', type: 'Reaction', family: '', },
  { name: 'heart', prefix: 'fa fa-heart', type: 'Reaction', family: '', },

  { name: 'car', prefix: 'fa fa-car', type: 'Transport', family: '', },
  { name: 'plane', prefix: 'fa fa-plane', type: 'Transport', family: '', },
  { name: 'train', prefix: 'fa fa-train', type: 'Transport', family: '', },
  { name: 'subway', prefix: 'fa fa-subway', type: 'Transport', family: '', },

  { name: 'ambulance', prefix: 'fa fa-ambulance', type: 'Healty', family: '', },
  { name: 'stethoscope', prefix: 'fa fa-stethoscope', type: 'Healty', family: '', },
  { name: 'medkit', prefix: 'fa fa-medkit', type: 'Healty', family: '', },
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

//  ------------------------------------------------------------------------------ Milestone 2: ------------------------------------------------------------------------------------------
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

const colors = ['blue', 'green', 'red']
const types = []

// tutte le opzioni (tipi)
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
   <i class="${element.prefix}" style="color:${element.color}"></i>
   <span style="color:${element.color}">${element.name}</span>
 </div>
 `
})


//  ------------------------------------------------------------------------------ Milestone 3: ------------------------------------------------------------------------------------------
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

const iconsFiltered = document.getElementById('icons-filtered'); // dove verrano mostrate le iconse
const selector = document.getElementById('selector')
// const types = [array dei tipi]

types.forEach((element) => {
  selector.innerHTML += `
  <option value="${element}">${element}</option>
  `
})

const selectorElement = $('#selector')

// FUNZIONE al change
// al 'change' (clicchi sul selector e quando selezioni un'opzione vi è un change)
selectorElement.change(function() {

  // ogni volta che l'utente filtra si cancella la selezione precedente
  iconsFiltered.innerHTML = '';

  const typeSelected = $(this).val()
  console.log(typeSelected) // console.log() <= di quello che ha cliccato

  let filteredArray = icons
  // se seleziona un tipo (se typeSelected è pieno (quando è in ALL è vuoto))
  if(typeSelected.length > 0) {
    filteredArray = icons.filter((element) => {
      return element.type === typeSelected
    })
  }
  console.log(filteredArray)


  // popolo l'HTML
  filteredArray.forEach((element) => {

    iconsFiltered.innerHTML += `
    <div>
      <i class="${element.prefix}" style="color:${element.color}"></i>
      <span style="color:${element.color}">${element.name}</span>
    </div>
    `
  })
})
// fine FUNZIONE al change

// lancio una funzione per fare in modo che al lancio sia selezionato ALL
selectorElement.change()
