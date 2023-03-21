/* Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato */


//
const container_el = document.querySelector('.container');

const array_container = document.createElement('div');
const num_to_generate = 5;
//assegno l'array dei numeri ad una variabile
const numb_to_remember = [];
//genero 5 numeri casuali e li inserisco nell'array
function generateNumb () {
    
    while (numb_to_remember.length < num_to_generate) {
        const random_number =  Math.floor(Math.random() * (100 - 1) ) + 1;
        if (!numb_to_remember.includes(random_number)) {
            numb_to_remember.push(random_number)
        }

    }
}
//invoco la funzione
generateNumb(); 

//trasformo l'array in una stringa
const spanNumb = numb_to_remember.join(' ');

//stampo a schermo l'array
array_container.innerHTML = `${spanNumb}`;
container_el.insertAdjacentElement('afterbegin', array_container); 


//parte il timer
setTimeout(hideNumbers, 3000);

function hideNumbers() {
    array_container.classList.add('d-none');
}
//i numeri scompaiono

setTimeout(askNumbers, 4000);
//creo un array vuoto dove verranno salvati i numeri inseriti dall'utente 
let resultArray = [];
const guess_el = document.querySelector('.guess_container');


function askNumbers() {
    
    guess_el.classList.remove('d-none');
    
    const spanAskNumb = document.querySelector('.guessed_numbers')
}


const sub_btn = document.querySelector('.submit_btn');
const inputField = document.getElementById('guess_numbers');


sub_btn.addEventListener('click', function() {

        const ask_numb = Number(inputField.value);

        if (resultArray.length < num_to_generate) {
            resultArray.push(ask_numb);
            inputField.value = '';
        } else {
            answer(numb_to_remember, resultArray);
        }

        console.log(resultArray);

})

//console.log(resultArray);
//console.log(numb_to_remember)

//confronto l'array creato con l'array iniziale
function answer(numb_to_remember, resultArray) {
    let totNumb = 0;
    let guessedArray = [];

    for (let i = 0; i < numb_to_remember.length; i++) {
        const ask_numb = resultArray[i];
        
        //se un numero dell'array creato appartiene all'array dei numeri casuali
        if (numb_to_remember.includes(ask_numb)) {
            //lo aggiungo all'array dei numeri indovinati
            guessedArray.push(ask_numb);
            console.log(guessedArray);
            //incremento il valore di numeri indovinati
            totNumb++;
        }
    } 



    print(totNumb, guessedArray);
}




function print(number, array) {
    const resultSpan = document.createElement('div');
    resultSpan.innerHTML = `hai indovinato ${number} numeri: ${array}`;
    container_el.insertAdjacentElement('beforeend', resultSpan);
}
