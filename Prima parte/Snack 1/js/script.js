
// -------
// Snack 1
// -------

// Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso
const objectsArray = [
    {
        nome: 'Rockrider',
        peso: 6,
    },
    {
        nome: 'Discovery',
        peso: 8,
    },
    {
        nome: 'Alpina',
        peso: 7,
    },
    {
        nome: 'Riverside',
        peso: 5,
    }
];

// CORREZIONE ----------------------------
let lightBike = objectsArray[0];

for (let i = 0; i < objectsArray.length; i++ ) {

    const thisBike = objectsArray[i];

    if (thisBike.peso < lightBike.peso) {
        lightBike = thisBike;
    }
}

// Destructuring
const {nome, peso} = lightBike;
// ---------------------------------------

// Appending the object to the DOM
const mainContainer = document.getElementById('container');  

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM
mainContainer.innerHTML += `<div><h2>La bici più leggera è ${nome} e pesa ${peso} kg</h2></div>`;


