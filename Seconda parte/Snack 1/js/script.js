
// -------
// Snack 1
// -------

// Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// e dati due numeri min e max (min più piccolo di max).
const min = 1;
const max = 4;

// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
    // Eseguiamo questo esercizio prima con forEach e poi con filter.

// forEach ------
const newArray = [];

myArray.forEach((element, index, array) => {
    (index >= min & index <= max) ? newArray.push(element): false;
})

// console.log(newArray);

// filter ------
const anotherNewArray = myArray.filter ((element, index) => {
    return index >= min && index <= max;
})

// console.log(anotherNewArray);
