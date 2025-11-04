    console.log('Array')
let numbers = [ 20, 18, 22, 44, 35, 0, -1, 1,5, 100, 20];
console.log(numbers.lenght); //-> 10;
console.log(numbers[3]);

let bouleans = [true, true, true, false, true];


let strings = 







/// AGGIUNGERE ELEMENTI

// strings.push('paperone'); // push aggiunge in fondo;

// console.log(strings);

// strings.unshift('paperino'); // unshift aggiunge in cima;

// console.log(strings);

/// RIMUOVERE ELEMENTI

// const rimosso = strings.pop(); // pop toglie l'ultimo elemento
// console.log(strings);
// console.log(rimosso);


// const rimosso2 = strings.shift(); // shift toglie il primo elemento
// console.log(strings);
// console.log(rimosso2)


// const rimosso3 = strings.splice(2, 1); // splice toglie in mezzo e restituisce un array con quelli rimossi
// console.log(strings);
// console.log(rimosso3)


// const rimosso4 = numbers.splice(1, 3);
// console.log(numbers);
// console.log(rimosso4)

// CAMBIARE GLI ELEMENTI


// strings[0] = 'superpippo';

// console.log(strings);

// strings[3] = 'super' + strings[3];

// console.log(strings);

// numbers[4] = 2;

// console.log(numbers);

// numbers[8] = numbers[8] * 2;

// console.log(numbers);


/// PATTERN DEGLI ARRAY

// MAP -> modifica di tutti o parte degli elementi di un array

// 1) trasforma tutte le stringe dell'array al maiuscolo

// for (let i = 0; i < strings.length; i++) {

//     strings[i] = strings[i].toUpperCase();

// }

// console.log(strings)
                            //['pippo', 'pluto', 'topolino', 'leonardo']
// function arrayToUppercase(stringArray) {

//     debugger;

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {

//         const element = stringArray[i];

//         const elementUpper = element.toUpperCase()

//         newArray.push(elementUpper);

//     }

//     return newArray;

// }

// console.log(arrayToUppercase(strings));

// 2) moltiplica per due tutti i numeri in un array

// function multiplyBy2Array(numberArray) {

//     const newArray = [];

//     for (let i = 0; i < numberArray.length; i++) {

//         const element = numberArray[i];

//         const dubleElement = element * 2;

//         newArray.push(dubleElement);

//     }

//     return newArray;

// }


// console.log(multiplyBy2Array(numbers));


// 3) trasforma tutte le stringe dell'array che iniziano per p al maiuscolo

// function arrayToUppercaseWordsStartingWithP(stringArray){

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {

//         const element = stringArray[i];

//         if(element[0] === 'p'){
//             const elementUpper = element.toUpperCase();
//             newArray.push(elementUpper);
//         } else {
//             newArray.push(element);
//         }


//     }
//     return newArray;
// }


// console.log(arrayToUppercaseWordsStartingWithP(strings))



constpippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

function squareArray(nbrArray) {
     return nbrArray.map(num => num * num);
    
}

console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]


//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

function squareOddArray(nbrArray) {
  return nbrArray.map(num => num % 2 !== 0 ? num * num : num);
}

console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]



//42) creare una funzione che dato un array di lichi per due quelli positivi e divida per due i negativinumeri moltip

function multiplyPoisitiveAndDivideNegative(nbrArray) {
     return nbrArray.map (num => num % 2 !== 0 ); {
    if (num > 0) return num * 2;
    if (num < 0) return num / 2;
    return num; // lascia invariato lo zero
  };

}

console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];

//scrivere una funzione che rimuova dall'array tutti i nr dispari
function removeOdd(nbrArray){
  const newArray = [];
  for(let i=0; i< nbrArray.lenght; i++){
    const element = nbrArray[i];
    if (element % 2 === 0){
      newArray.push(element);
    }
  }

 return newArray;
}
console.log(removeOdd(numbers));

//SCRIVO FUNZIONE CHE RIMUOVA STRINGHE CHE INIZIANO PER P
function removeStartingWithP(stringArray){
  const newArray = [];
  for (let i=0; i< stringArray.lenght; i++){
    const element = stringArray[i];
    const firstChar = element [0];
    
    const firstCharLower = firstChar.totalLowerCase();
    


    if (firstCharLower !== 'p') {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(removeStartingWithP(strings))


// scrivo funzione che generi una stringa composta dalle iniziali delle stringhe contenute in array
function concatFirstChart(stringArray){
  let newString = '';
  for (let i = 0; i<stringArray.lenght; i++){
    const element = stringArray[i];
    constfirstChar = element [0];
    newString = newString + firstChar;
  }
  return newString;
}
console.log(concatFirstChar(strings))



//Scrivo funzione che trovi il nr più grande di un array
function findMax(nbrArray){
  for(let i = 0; i< nbrArray.lenght; i ++){
    const element = nbrArray[i];

    if(element>max) {
      max = element;
    }
  }
  return max;
}
console.log(findMax(numbers))

