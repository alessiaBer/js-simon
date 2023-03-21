/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato */
//
const container_el = document.querySelector('.container');

const array_container = document.createElement('span');

//assegno l'array dei numeri ad una variabile
const numb_to_remember = [1, 2, 3, 7, 8];
//genero 5 numeri casuali e li inserisco nell'array
/* function generateNumb () {
    const num_to_generate = 5;
    while (numb_to_remember.length < num_to_generate) {
        const random_number =  Math.floor(Math.random() * (100 - 1) ) + 1;
        if (!numb_to_remember.includes(random_number)) {
            numb_to_remember.push(random_number)
        }

    }
}
//invoco la funzione
generateNumb();  */

//trasformo l'array in una stringa
const spanNumb = numb_to_remember.join(' ');

//stampo a schermo l'array
array_container.innerHTML = `${spanNumb}`;
container_el.insertAdjacentElement('afterbegin', array_container); 


//parte il timer

//i numeri scompaiono

//creo un array vuoto dove verranno salvati i numeri inseriti dall'utente 
const resultArray = [];
//con un loop che itera per il numero di i di numb_to_remember
for (let i = 0; i < numb_to_remember.length; i++) {
    //chiedo all'utente attraverso un prompt di inserire i numeri che ha visto e salvo il risultato in una variabile
    const ask_numb = Number(prompt('inserisci i numeri che hai visto, uno alla volta'));
    //assegno i numeri risultanti a un array
    resultArray.push(ask_numb);
}

//console.log(resultArray);
//console.log(numb_to_remember)

//confronto l'array creato con l'array iniziale
function answer() {
let totNumb = 0;
let guessedArray = [];

    for (let i = 0; i < numb_to_remember.length; i++) {
    const ask_numb = resultArray[i];
    
    
    
    //se un numero dell'array creato appartiene all'array dei numeri casuali
    if (numb_to_remember.includes(ask_numb)) {
        //lo stampo in console
        guessedArray.push(ask_numb);

        totNumb++;
    }
} 
 print(totNumb, guessedArray);
}
answer();

function print(number, array) {
    const resultSpan = document.createElement('span');
    resultSpan.innerHTML = `hai indovinato ${number} numeri: ${array}`;
    container_el.insertAdjacentElement('beforeend', resultSpan);
}
