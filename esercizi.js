// // for(let i = 1; i <= 100; i++){
// //     const square = i**2;
// //     console.log(square);


// // }

// // for(let i = 1; i < 101 ; i++){
// //     if(i % 2 === 0){
// //         console.log("pari")

// //     }else { 
// //             console.log(dispari)

// //     }
// // }


// // let i=1;

// // while( i <= 100){

// //     const square = i**2;
// //     console.log ( square );
// //     i++;

// // }

// // let i=1;
// // while(i <101){

// //     if(i%2===0){
// //         console.log ("pari");




// //     }
// //     else{
// //         console.log ("dispari")
// //     }
// //     i++;
// // }


// // //ESERCIZIO 8
// // let i=1;
// // while(i<=100){
// //     if(i %7 === 0){
// //         console.log(i+"*");
// //     }
// //     else{
// //         console.log(i );

// //     }
// //     i++;
// // }


// // //ESERCIZIO 9






// //23) È possibile ottenere l'ennesimo carattere, o lettera, da una stringa scrivendo [N] dopo la stringa (ad esempio, string[2]). Il valore risultante sarà una stringa contenente un solo carattere (ad esempio, "b"). Il primo carattere ha posizione 0, il che fa sì che l'ultimo si trovi alla posizione string.length - 1. In altre parole, una stringa di due caratteri ha lunghezza 2 e i suoi caratteri hanno posizioni 0 e 1.

// //Scrivi una funzione chiamata countBs che accetti una stringa come unico argomento e restituisca un numero che indica quanti caratteri B maiuscoli sono presenti nella stringa.

// //Scrivi quindi una funzione chiamata countChar che si comporti come countBs, tranne per il fatto che accetta un secondo argomento che indica il carattere da contare (invece di contare solo i caratteri B maiuscoli). Riscrivi countBs per utilizzare questa nuova funzione.

// // function countUppercaseB(str) {
// //     let count = 0;
// //     for (let i = 0; i < str.length; i++) {
// //         const char = str.charAt (i);
// //         if(char === 'B'){
// //             count++;

// //         }

// //     }
// // return count;

// // }

// // const resultCountB = countUppercaseB('Barbara Bianca Bocca Bullo' ); 
// // console.log(resultCountB);

// function countBs(str){
//   let counter = 0;
//   for(let i = 0; i< str.length; i++){
//     const selectedChar = str[i];
//     const lowerChar = selectedChar.toLowerCase ()
//       if (lowerChar ==="b"){
//         counter++

//       }


//   }

// }
// console.log(countBs"bambino")//->2


// // const countBs = string('B')

// function countCharSensitive(str, char, isSensitive){
//   let counter = 0;
//   for (let i = 0; < str.length; i =++){
//     const selectedChar = str[i] ;
//     const selectedLower = selectedChar.toLowerCase();
//     constCharLOwer = char.toLowerCase();
//     if (selectedLower === constCharLower){
//       counter++
//     }

//   }
//   return counter;

// }



// //24) Inversione di un numero

// function invertedNumber (n) {
//     const stringNumber = n.toString();
//     const numberInverted = stringNumber.split('').reverse().join('');
//     return parseInt(numberInverted,10);


// }

// const resultinverted = invertedNumber(345);
// console.log(resultinverted);


// //Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// function invertiNumero(numero) {
//   // Converte il numero in stringa, lo divide in caratteri, li inverte e poi li riunisce
//   const numeroInvertito = numero.toString().split('').reverse().join('');
//   // Converte di nuovo in numero e lo restituisce
//   return parseInt(numeroInvertito) * Math.sign(numero);
// }

// // Esempi di utilizzo
// console.log(invertiNumero(1234));   // Output: 4321
// console.log(invertiNumero(-567));   // Output: -765



// //25) Tabellina


// //Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.



// function tabellina(numero) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
//   }
// }

// function tabellina(nbr){
//   console.log(nbr*1);
//   console.log(nbr*2);
//   console.log(nbr*3);
//   console.log(nbr*4);
//   console.log(nbr*5);
//   console.log(nbr*6);
//   console.log(nbr*7);
//   console.log(nbr*8);
//   console.log(nbr*9);
//   console.log(nbr*10);
// }
// tabellina(3)


// function tabellinaString(nbr) {
//   let tabellinaStr = '';
//   for (let i = 1; i < 11; i++) {
//     const result = nbr * i;
//     tabellinaStr += result;
//     tabellinaStr += '';
//   }
//   return tabellinaString;

// }

// for (let i = 1; i < 11; i++) {
//   console.log(tabellinaString(i))
// }

// // 26) Fibonacci


// // Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.



// // function fibonacci(N) {
// //   if (N <= 0) return 0;
// //   if (N === 1) return 1;

// //   let a = 0, b = 1, temp;

// //   for (let i = 2; i <= N; i++) {
// //     temp = a + b;
// //     a = b;
// //     b = temp;
// //   }

// function fibo(pos) {
//   const first = 0;
//   const second = 1;

//   if (pos === 1) {
//     return first;
//   } else if (pos === 2) {
//     return second;
//   } else if (pos > 2) {
//     let fib;



//     for (let i = 3; i <= pos; i++) {
//       const fib = first + second;
//       second = fib;
//     }
//     return fib;
//   } else {
//     console.log("ERRORE")

//   }
//   console.log(fibo(7));
// }


// function reversenumber(nbr) {
//   const nbrToString = String(nbr);
//   let reversed = "";

//   for (let i = nbrToString.length - 1; i >= 0; i--) {
//     const char = nbrToString[i];
//     reversed += char;
//   }
//   const reverseToNumber = Number(reversed);
//   return reversedToNumber;
// }
// console.log(reverseNumber(12345))



// //27)  Conteggio vocali


// //Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.
// function contaVocali(stringa) {
//   const vocali = 'aeiouAEIOU';
//   let contatore = 0;

//   for (let i = 0; i < stringa.length; i++) {
//     if (vocali.includes(stringa[i])) {
//       contatore++;
//     }
//   }

//   return contatore;
// }


// console.log(contaVocali("ciao"));      // ➜ 3
// console.log(contaVocali("Stefania"));  // ➜ 4




// function countBs(str) {
//   let counter = 0;

//   for (let i = 0; i < str.length; i++) {
//     const selectedChar = str[i];
//     const lowerChar = selectedChar.toLowerCase()
//     if (lowerChar === "a"
//       || lowerChar === 'e'
//       || lowerChar === 'i'
//       || lowerChar === 'o'
//       || lowerChar === 'u') {
//       counter++
//     }


//   }



//   return counter
// }
// console.log(countVowels('aiuola'))









// //28) Sconto


// //Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

// function applicaSconto(prezzo, percentualeSconto) {
//   const sconto = (prezzo * percentualeSconto) / 100;
//   const prezzoFinale = prezzo - sconto;
//   return prezzoFinale;
// }

// console.log(applicaSconto(100, 20)); // ➜ 80
// console.log(applicaSconto(50, 10));  // ➜ 45


// //29) Conversione gradi
// function convertiGradi(celsius) {
//   let fahrenheit = (celsius * 9 / 5) + 32;
//   return fahrenheit;
// }




// console.log(convertiGradi(0));   // Output: 32
// console.log(convertiGradi(25));  // Output: 77
// console.log(convertiGradi(100));



// //VERIFICA PASSWORD che abbia almeno una lettera maiuscola un carattere speciale

// if (isToShort(password)){

// }



//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

function sommaFinoAN(nbr){






    let sum = 0





    for (let i = 1; i <= nbr; i++) {


        sum = sum + i;


    }





    return sum;


}





console.log(sommaFinoAN(5))


console.log(sommaFinoAN(50))




// 32) Conteggio cifre

// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero


// contaCifre(5) -> 1


// contaCifre(1245) -> 4








function contaCifre(nbr){





    let nbrToString = String(nbr);


           // '1245'


    let length = nbrToString.length;


           // 4


    return length;


}





console.log(contaCifre(5))// -> 1


console.log(contaCifre(1245))// -> 4







// 33) Somma delle cifre

// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero

// sommaCifre(5) -> 5

// sommaCifre(1245) -> 12





function sommaCifre(nbr){


                  //1245


    //debugger;





    let nbrToString = String(nbr);


        //'1245'


        


    let sum = 0





    for (let i = 0; i < nbrToString.length; i++) {


                            //4





        const nChar = nbrToString[i];


            //'5'                //3





        const n = Number(nChar);


            //5





        sum = sum + n;


        //12   //7 //5


    }





    return sum;


          //12


}





console.log(sommaCifre(1245));




// 34) Conversione valuta


// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.1 dollari).


// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.15 dollari).





function euroToDollaro(euro) {





    const dollaro = euro * 1.15;





    return dollaro;


}





console.log(euroToDollaro(5));







// 35) Calcolo area rettangolo

// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.





function areaRettangolo(base, altezza){





    const area = base * altezza;





    return area;





}





console.log(areaRettangolo(5, 20));




// 36) Calcolo media

// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.





function media(a, b, c){





    const sum = a + b + c;





    const mean = sum / 3;





    return mean;


}





console.log(media(5, 20, 11));




// 37) Generatore di password casuale

// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())





function generaPasswordCasuale() {





    const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789';


                               //012345678..


    let password = '';


    


    for (let i = 0; i < 8; i++) {





        const numeroRandomico = Math.random();





        const position = numeroRandomico * (availableCharacters.length - 1);





        const roundedPosition = Math.round(position);





        password = password + availableCharacters[roundedPosition];


        


    }





    return password;


}





console.log(generaPasswordCasuale())




// 38) Potenza con ciclo

// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.


function potenzaCiclo(base, esponente) {





    if (esponente === 0) {


        return 1;


    }





    // let pow = 1;





    // for (let i = 0; i < esponente; i++) {





    //     pow = pow * base;





    // }


    


    // return pow;





    let pow = base;





    for (let i = 1; i < esponente; i++) {





        pow = pow * base;





    }


    


    return pow;


}





console.log(potenzaCiclo(2, 5))




// 39) Scrivi un validatore di email con queste regole:

// -deve contenere una @

// -deve contenere un punto posizionato dopo la @

// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere

// -il punto non può essere l'ultimo carattere


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)





function constainsAt(email) {


    if(email.includes('@')){


        return true;


    } else {


        return false;


    }


}





function containsDotAfterAt(email) {


    const dotPosition = email.indexOf('.');


    if (dotPosition === -1) {


        return false;


    }


    const atPosition = email.indexOf('@');


    if (dotPosition > atPosition) {


        return true;


    } else {


        return false;


    }


}





function firstAndSecondPartlengthIsThreeOrMore(email) {





    const atPosition = email.indexOf('@');


    const firstPart = email.substring(0, atPosition);





    const dotPosition = email.indexOf('.');


    const secondPart = email.substring(atPosition + 1, dotPosition);





    if (firstPart.length >= 3 && secondPart.length >=3) {


        return true;


    } else {


        return false;


    }


}





function lastCharMustBeDifferentFromDot(email) {


    const lastPosition = email.length - 1;


    const lastChar = email[lastPosition];





    if (lastChar === '.') {


        return false;


    } else {


        return true;


    }


}





function emailValidator(email) {


    if (!constainsAt(email)) {


        return false


    } else if (!containsDotAfterAt(email)){


        return false


    } else if (!firstAndSecondPartlengthIsThreeOrMore(email)){


        return false


    } else if (!lastCharMustBeDifferentFromDot(email)){


        return false


    } else {


        return true;


    }


}











console.log(emailValidator('ciaociao'))


console.log(emailValidator('ciao@ciao'))


console.log(emailValidator('ci.ao@ciao'))


console.log(emailValidator('ciao@ciao.'))


console.log(emailValidator('ciao@cia.o'))








// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)





function farfallinoTranslator(str) {


    


    const vowels = 'aeiou';





    let farfallinoStr = '';





    for (let i = 0; i < str.length; i++) {





        const char = str[i]





        if (vowels.includes(char.toLowerCase())) {


            farfallinoStr = farfallinoStr + char + 'f' + char;


        } else {


            farfallinoStr = farfallinoStr + char;


        }


    }


    return farfallinoStr;


}





console.log(farfallinoTranslator('leonardo'))


console.log(farfallinoTranslator('LEONARDO'))


console.log(farfallinoTranslator('viva la pausa!!'))



// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.



// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.



// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.



// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.



// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array



// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari



// 49) Somma pari 
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari


// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input






