/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// Seleziono l'elemento HTML bottone al cui click effettuerò i controlli sulla parola inserita
let buttonVerifyWord = document.getElementById('button-verify-word');

// Seleziono l'elemento HTML dove stamperò il risultato
let outputArea = document.getElementById('word-output');

// Eseguo la funzione che al click del bottone verifica se la parola inserita è palindroma
buttonVerifyWord.addEventListener('click', isPalindrome);





// Definizione della funzione
function isPalindrome() {
    // Seleziono l'elemento HTML in cui l'utente scrive la parola
    let inputBox = document.getElementById('word');

    // Definisco una variabile per la parola inserita dall'utente
    let userWord = inputBox.value;

    // Scompongo la parola inserita in un array di caratteri
    let arrayWord = [...userWord];

    // Inverto l'ordine degli elementi dell'array dei singoli caratteri della parola
    let arrayReversedWord = arrayWord.reverse();

    // Ricompongo gli elementi dell'array invertito in un'unica stringa
    let reversedWord = arrayReversedWord.join('');

    // Confronto l'uguaglianza tra le due parole trasformate in minuscolo per confrontarne l'uguaglianza e stampo il risultato, prima però faccio una verifica sulla lunghezza della parola perché la verifica ha senso solo per parole di almeno due caratteri
    if (userWord.length == 0) {
        outputArea.innerHTML = `Non hai digitato nulla.`;
    } else if (userWord.length < 2) {
        outputArea.innerHTML = `Inserisci una parola di almeno 2 caratteri.`;
    } else if (userWord.toLowerCase() == reversedWord.toLowerCase()) {
        outputArea.innerHTML = `La parola "${userWord}" è palindroma.`;
    } else {
        outputArea.innerHTML = `La parola "${userWord}" non è palindroma.`;
    }

    // Ripulisco l'input
    inputBox.value = ``;

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
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/