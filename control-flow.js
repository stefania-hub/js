const age= prompt (Quanti anni hai?)
const ageNumber = Number(age)
if (ageNumber===0){
    alert ("Sei un boomer?")
} else if (ageNumber <15){
    alert ("Complimenti, non sei un boomer!")
}  if ( ageNumber >55){
    alert ("Sei un boomer!")
}





let nomeUtente = prompt("Come ti chiami?");

if (nomeUtente && nomeUtente () !== "") {
  alert("Auguri, " + nomeUtente + "!");
} else {
  alert("Non hai inserito il nome. Auguri lo stesso!");
}