

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


