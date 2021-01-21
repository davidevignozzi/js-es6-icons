// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const icons = [
  { name: 'comment', prefix: 'fa fa-comment', type: '', family: 'reaction', },
  { name: 'thumbs', prefix: 'fa fa-thumbs-up ', type: '', family: 'reaction', },
  { name: 'heart', prefix: 'fa fa-heart', type: '', family: 'reaction', },

  { name: 'car', prefix: 'fa fa-car', type: '', family: 'transport', },
  { name: 'plane', prefix: 'fa fa-plane', type: '', family: 'transport', },
  { name: 'train', prefix: 'fa fa-train', type: '', family: 'transport', },
  { name: 'subway', prefix: 'fa fa-subway', type: '', family: 'transport', },

  { name: 'ambulance', prefix: 'fa fa-ambulance', type: '', family: 'healty', },
  { name: 'stethoscope', prefix: 'fa fa-stethoscope', type: '', family: 'transport', },
  { name: 'medkit', prefix: 'fa fa-medkit', type: '', family: 'transport', },
]

const appContainer = document.getElementById('container');

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


// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
