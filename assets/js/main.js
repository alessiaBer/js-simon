/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato */


//assegno l'array dei numeri ad una variabile
const numb_to_remember = [];
//genero 5 numeri casuali e li inserisco nell'array
function generateNumb () {
    const num_to_generate = 5;
    while (numb_to_remember.length < num_to_generate) {
        const random_number =  Math.floor(Math.random() * (100 - 1) ) + 1;
        if (!numb_to_remember.includes(random_number)) {
            numb_to_remember.push(random_number)
        }

        console.log(numb_to_remember);
    }
}

generateNumb();
//stampo a schermo l'array
const container_el = document.querySelector('.container');
const array_container = document.createElement('span');
array_container.innerHTML = `${numb_to_remember}`;
container_el.insertAdjacentElement('afterbegin', array_container); 
//parte il timer

//i numeri scompaiono

//con un loop che ha come condizione i<array.length

//chiedo all'utente attraverso un prompt di inserire i numeri che ha visto e salvo il risultato in una variabile

//assegno i numeri risultanti a un array

//confronto l'array creato con l'array iniziale

//se un numero dell'array creato appartiene all'array dei numeri casuali

//lo stampo in console