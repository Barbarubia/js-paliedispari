/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// Seleziono l'elemento HTML bottone al cui click effettuerò i controlli sulla parola inserita
let buttonVerifyWord = document.getElementById('button-verify-word');

// Seleziono l'elemento HTML dove stamperò il risultato
let outputWordArea = document.getElementById('word-output');

// Eseguo la funzione che al click del bottone verifica se la parola inserita è palindroma
buttonVerifyWord.addEventListener('click', isPalindrome);





// Definizione della funzione
function isPalindrome() {
    // Seleziono l'elemento HTML in cui l'utente scrive la parola
    let wordBox = document.getElementById('word');

    // Definisco una variabile per la parola inserita dall'utente
    let userWord = wordBox.value;

    // Scompongo la parola inserita in un array di caratteri
    let arrayWord = [...userWord];

    // Inverto l'ordine degli elementi dell'array dei singoli caratteri della parola
    let arrayReversedWord = arrayWord.reverse();

    // Ricompongo gli elementi dell'array invertito in un'unica stringa
    let reversedWord = arrayReversedWord.join('');

    // Confronto l'uguaglianza tra le due parole trasformate in minuscolo per confrontarne l'uguaglianza e stampo il risultato, prima però faccio una verifica sulla lunghezza della parola perché la verifica ha senso solo per parole di almeno due caratteri
    if (userWord.length == 0) {
        outputWordArea.innerHTML = `Non hai digitato nulla.`;
    } else if (userWord.length < 2) {
        outputWordArea.innerHTML = `Inserisci una parola di almeno 2 caratteri.`;
    } else if (userWord.toLowerCase() == reversedWord.toLowerCase()) {
        outputWordArea.innerHTML = `La parola "${userWord}" è palindroma.`;
    } else {
        outputWordArea.innerHTML = `La parola "${userWord}" non è palindroma.`;
    }

    // Ripulisco l'input
    wordBox.value = ``;

}


/*
// Voglio che la parola inserita sia composta esclusivamente da caratteri alfabetici (maiuscolo o minuscolo non importa)
let caratteriConsentiti = /^[a-zA-Z]+$/;
*/









/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Seleziono l'elemento HTML bottone al cui click l'utente giocherà a pari e dispari
let buttonPlay = document.getElementById('button-play');

// Seleziono l'elemento HTML dove stamperò il risultato
let outputNumberArea = document.getElementById('number-output');

// Eseguo la funzione che al click del bottone verifica se la parola inserita è palindroma
buttonPlay.addEventListener('click', playOddOrEven);

// Seleziono gli elementi HTML relativi ai radio buttons
const radioButtons = document.querySelectorAll('input[name="odd-or-even"]');

// Seleziono l'elemento HTML dove l'utente digita un numero
let numberBox = document.getElementById('number')

// Scrivo la funzione che fa generare un numero intero casuale compreso tra 1 e 5 inclusi
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Scrivo la funzione per giocare
function playOddOrEven() {

    // Definisco il valore scelto dall'utente
    let userNumber = numberBox.value

    // Controllo se l'utente ha scelto pari o dispari
    // Questo controllo l'ho cercato su internet
    let selectedRadioButton;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRadioButton = radioButton.value
        }
    }

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5 || parseInt(userNumber) - userNumber != 0) {
        outputNumberArea.innerHTML = `Devi digitare un numero intero da 1 a 5`;
    }

    // Il computer genera un numero random da 1 a 5
    let randomNumber = randomNumberGenerator(1, 5);

    // Effettuo la somma del numero scelto dall'utente e del numero random generato
    let sum = parseInt(userNumber) + parseInt(randomNumber);

    // Controllo il numero digitato dall'utente: se non ha digitato un valore intero compreso tra 1 e 5 stampo un errore, altrimenti stabilisco chi ha vinto
    if (selectedRadioButton != "even" && selectedRadioButton != "odd") { // l'utente non ha scelto pari o dispari
        outputNumberArea.innerHTML = `Devi scegliere pari o dispari`;
    } else if (isNaN(userNumber) || userNumber < 1 || userNumber > 5 || parseInt(userNumber) - userNumber != 0) {
        outputNumberArea.innerHTML = `Devi digitare un numero intero da 1 a 5`;
    } else if ((selectedRadioButton == "even") && (sum % 2 == 0)) { // l'utente ha scelto pari e la somma dei numeri è pari
        outputNumberArea.innerHTML = `È uscito il numero ${sum}: HAI VINTO!`;
    } else if ((selectedRadioButton == "odd") && (sum % 2 != 0)) { // l'utente ha scelto dispari e la somma dei numeri è dispari
        outputNumberArea.innerHTML = `È uscito il numero ${sum}: HAI VINTO!`;
    } else {
        outputNumberArea.innerHTML = `È uscito il numero ${sum}: HAI PERSO!`;
    }
}








/*
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/