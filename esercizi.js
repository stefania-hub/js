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

function invertiNumero(numero) {
  // Converte il numero in stringa, lo divide in caratteri, li inverte e poi li riunisce
  const numeroInvertito = numero.toString().split('').reverse().join('');
  // Converte di nuovo in numero e lo restituisce
  return parseInt(numeroInvertito) * Math.sign(numero);
}

// Esempi di utilizzo
console.log(invertiNumero(1234));   // Output: 4321
console.log(invertiNumero(-567));   // Output: -765



//25) Tabellina


//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.



function tabellina(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

//26) Fibonacci


//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.



function fibonacci(N) {
  if (N <= 0) return 0;
  if (N === 1) return 1;

  let a = 0, b = 1, temp;

  for (let i = 2; i <= N; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }


//27)  Conteggio vocali


//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.
function contaVocali(stringa) {
  const vocali = 'aeiouAEIOU';
  let contatore = 0;

  for (let i = 0; i < stringa.length; i++) {
    if (vocali.includes(stringa[i])) {
      contatore++;
    }
  }

  return contatore;
}


console.log(contaVocali("ciao"));      // ➜ 3
console.log(contaVocali("Stefania"));  // ➜ 4




//28) Sconto


//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

function applicaSconto(prezzo, percentualeSconto) {
  const sconto = (prezzo * percentualeSconto) / 100;
  const prezzoFinale = prezzo - sconto;
  return prezzoFinale;
}

console.log(applicaSconto(100, 20)); // ➜ 80
console.log(applicaSconto(50, 10));  // ➜ 45


//29) Conversione gradi
function convertiGradi(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
//OPPURE



console.log(convertiGradi(0));   // Output: 32
console.log(convertiGradi(25));  // Output: 77
console.log(convertiGradi(100));