/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Seleziono l'elemento HTML in cui l'utente scrive la parola
let inputBox = document.getElementById('word');

// Definisco una variabile per la parola inserita dall'utente
let userWord = inputBox.value;

// Seleziono l'elemento HTML bottone al cui click effettuerò i controlli sulla parola inserita
let buttonVerifyWord = document.getElementById('button-verify-word');

// Seleziono l'elemento HTML dove stamperò il risultato
let outputArea = document.getElementById('word-output');

// Genero la funzione che verifica se la parola è palindroma
function isPalindrome(verifyWord) {
    // Scompongo la parola inserita in un array di caratteri tutti minuscoli
    let arrayWord = [...verifyWord.toLowerCase()];

    // Definisco un array, inizialmente vuoto, per generare un array reverse del precedente
    let arrayReverseWord = [];

    // Creo un ciclo for che prende i singoli elementi dell'array creato a partire dall'ultimo e li mette in un nuovo array
    for (let positionCharacter = arrayWord.length - 1; positionCharacter = 0; positionCharacter--) {
        arrayReverseWord.push(arrayWord[positionCharacter]);
    }

    // Confronto l'uguaglianza tra i 2 array per verificare se la parola è palindroma e stampo il risultato
    if (arrayWord == arrayReverseWord) {
        outputArea.innerHTML = `La parola "${verifyWord}" è palindroma.`;
    } else {
        outputArea.innerHTML = `La parola "${verifyWord}" non è palindroma.`;
    }
}

// Eseguo la funzione creata al click del bottone
buttonVerifyWord.addEventListener('click', isPalindrome(userWord));

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