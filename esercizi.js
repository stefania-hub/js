// for(let i = 1; i <= 100; i++){
//     const square = i**2;
//     console.log(square);
        

// }

// for(let i = 1; i < 101 ; i++){
//     if(i % 2 === 0){
//         console.log("pari")
        
//     }else { 
//             console.log(dispari)

//     }
// }


// let i=1;

// while( i <= 100){

//     const square = i**2;
//     console.log ( square );
//     i++;

// }

// let i=1;
// while(i <101){
    
//     if(i%2===0){
//         console.log ("pari");




//     }
//     else{
//         console.log ("dispari")
//     }
//     i++;
// }


// //ESERCIZIO 8
// let i=1;
// while(i<=100){
//     if(i %7 === 0){
//         console.log(i+"*");
//     }
//     else{
//         console.log(i );

//     }
//     i++;
// }


// //ESERCIZIO 9






//23) È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.

//Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che indica quanti caratteri B maiuscoli sono presenti nella stringa.

//Scrivi quindi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). Riscrivi countBs per utilizzare questa nuova funzione.

// function countUppercaseB(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charAt (i);
//         if(char === 'B'){
//             count++;

//         }
        
//     }
// return count;
    
// }

// const resultCountB = countUppercaseB('Barbara Bianca Bocca Bullo' ); 
// console.log(resultCountB);

function countBs(str){
    
}


// const countBs = string('B')



//24) Inversione di un numero

function invertedNumber (n) {
    const stringNumber = n.toString();
    const numberInverted = stringNumber.split('').reverse().join('');
    return parseInt(numberInverted,10);

    
}

const resultinverted = invertedNumber(345);
console.log(resultinverted);


//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).





//25) Tabellina


//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.





//26) Fibonacci


//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.





//27)  Conteggio vocali


//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.





//28) Sconto


//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.





//29) Conversione gradi


//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit