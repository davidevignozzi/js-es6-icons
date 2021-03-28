// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 
// Milestone 2
// Coloriamo le icone per tipo
// 
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "Food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "Beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "Animal"
  },
];

// coloro per tipo
// Creo un array nel quale attribuisco ad ogni categoria un colore
const iconColor = [
  {
    category: "Food",
    color: "red"
  },
  {
    category: "Beverage",
    color: "green"
  },
  {
    category: "Animal",
    color: "blue"
  }
];

// aggiungo la chiave color in un array mappato
const iconColorated = icons.map((icon) => {
  
  let color;
  iconColor.forEach((element) => {
    if ( icon.category == element.category ) {
      color = element.color;
    }
  });
  //aggiungo la chiave all'icona
  icon.color = color;
  return icon;
});

const selector = document.getElementById('type');
const iconsContainer = $(".icons");

// tutti i type (non duplicati => !typeOptions.includes(..))
// typeOptions => lista delle opzioni nella select
const typeOptions = [];
icons.forEach((icon) => {
  if(!typeOptions.includes(icon.category)) {
    typeOptions.push(icon.category);
  }
});
console.log('Tutte le opzioni', typeOptions);

// printo nella select
typeOptions.forEach((item) => {
  selector.innerHTML += `
    <option value="${item}">${item}</option>
  `
})

const boxIcons = document.getElementsByClassName('icons');
const selectorElement = $('#type');

selectorElement.change(function() {

  // cancellare filtro precedente
  iconsContainer.html("")

  // salvo in una variabile la selezione dell'utente.
  // la selezione è il value all'interno dell'option che l'utente ha selezionato.
  const typeSelected = $(this).val()
  console.log(typeSelected)

  // array di icone che andrò a filtrare
  // verrà utilizzato per stampare le icone filtrate di volta in volta
  let filteredArray = [];

  if(typeSelected !== 'All') { 
    filteredArray = icons.filter((icon) => {
      // restituisce solo se il type di element è uguale a quello selezionato dall'utente
      return icon.category === typeSelected
    })
  } else {
    // altrimenti, typeSelected è uguale a All
    filteredArray = icons;
  }

  console.log(filteredArray);

  // print
  filteredArray.forEach((icon) => {

    iconsContainer.append(`
      <div>
        <i class="${icon.family} ${icon.prefix}${icon.name}" style="color: ${icon.color}"></i>
        <div class="title">${icon.name}</div>
      </div>
    `);
  })
})

// lancio manualmente il change.
selectorElement.change();

// style="color: ${color}"