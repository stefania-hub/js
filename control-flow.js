// const age= prompt ('Quanti anni hai?')
// const ageNumber = Number(age)
// if (ageNumber===0){
//     alert ("Sei un boomer?")
// } else if (ageNumber <15){
//     alert ("Complimenti, non sei un boomer!")
// }  if ( ageNumber >55){
//     alert ("Sei un boomer!")
// }





// let nomeUtente = prompt("Come ti chiami?");

// if (nomeUtente && nomeUtente () !== "") {
//   alert("Auguri, " + nomeUtente + "!");
// } else {
//   alert("Non hai inserito il nome. Auguri lo stesso!");
// }


// //WHILE
// let counter = 0

// while(counter <20) {
//     console.log("ciao!"+counter);
//     counter++;

// }
// console.log("sono uscito da while")




// //DO WHILE

// do {
// console.log("ciao"+counter)
// counter ++;    
// } while (counter <20);

// console.log("sono uscito da while")


// //FOR

// for (let i= 0; i<20; i++){
//     console.log("ciao!"+i)

// }
// console.log("sono uscito dal ciclo for")

//ESERCIZIO UNO
let line = "";
for (let i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}


//ESERCIZIO DUE
for (let n = 1; n <= 100; n++) {
  if (n % 15 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

//ESERCIZIO TRE
function chessboard(size) {
  let board = "";
  for (let r = 0; r < size; r++) {
    let line = "";
    for (let c = 0; c < size; c++) {
      if ((r + c) % 2 === 0) {
        line += " ";
      } else {
        line += "#";
      }
    }
    board += line + "\n";
  }
  return board;
}

// Esempio: stampa scacchiera 8x8
console.log(chessboard(8));