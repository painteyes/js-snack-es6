
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


// -------
// Snack2
// -------

// Creare un array di oggetti di squadre di calcio. 
    // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
        // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Atalanta',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Cagliari',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Sampdoria',
        punti: 0,
        falli: 0,
    } 
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const teamsCopy = [];

for (let i= 0; i < teams.length; i++) {

    let thisTeam = teams[i];

    thisTeam.punti = getRandomInt(0, 80);
    thisTeam.falli = getRandomInt(0, 60);

    // Destructuring
    const {nome, falli} = thisTeam;

    // Creating new object -> element of array
    const teamsProperties = {
        nome,
        falli
    };
    
    // Adding the object to the array
    teamsCopy.push(teamsProperties);
}

console.log(teamsCopy);


// ---------
// Functions
// ---------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


