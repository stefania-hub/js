// Esercizio 1: Gestione Studenti

// Crea una funzione che prenda un array di oggetti studente (con nome, voto, classe) e restituisca un nuovo array contenente solo gli studenti della classe "3A".
function filtraClasse3A(studenti) {
  return studenti.filter(studente => studente.classe === "3A");
}
// Esercizio 2: Calcolo Media Voti
function calcolaMedia(studenti) {
  let somma = 0; // qui mettiamo la somma dei voti

  // con un ciclo for aggiungiamo tutti i voti
  for (let i = 0; i < studenti.length; i++) {
    somma = somma + studenti[i].voto;
  }

  // poi dividiamo la somma per il numero degli studenti
  let media = somma / studenti.length;

  return media;
}
// Crea una funzione che prenda un array di oggetti studente (con nome e voto) e restituisca la media dei voti di tutti gli studenti.

// Esercizio 3: Ricerca per Proprietà

// Crea una funzione che prenda un array di oggetti prodotto (con nome, prezzo, categoria) e una categoria specifica, e restituisca tutti i prodotti di quella categoria.
const prodotti = [
  { nome: "Maglietta", prezzo: 20, categoria: "abbigliamento" },
  { nome: "Pane", prezzo: 2, categoria: "alimentari" },
  { nome: "Jeans", prezzo: 40, categoria: "abbigliamento" }
];
function trovaProdottiPerCategoria(prodotti, categoria) {
  return prodotti.filter(prodotto => prodotto.categoria === categoria);
}
// Esercizio 4: Modifica Prezzi

// Crea una funzione che prenda un array di oggetti prodotto (con nome e prezzo) e una percentuale di sconto, e restituisca un nuovo array con i prezzi scontati.
function applicaSconto(prodotti, percentuale) {
  let nuoviProdotti = []; // creeremo qui il nuovo elenco con i prezzi scontati

  for (let i = 0; i < prodotti.length; i++) {
    let prodotto = prodotti[i];
    let prezzoScontato = prodotto.prezzo - (prodotto.prezzo * percentuale / 100);

    // creiamo un nuovo oggetto con nome e prezzo scontato
    let nuovoProdotto = {
      nome: prodotto.nome,
      prezzo: prezzoScontato
    };

    // aggiungiamo il nuovo oggetto all’array
    nuoviProdotti.push(nuovoProdotto);
  }

  return nuoviProdotti; // restituisce tutti i prodotti scontati
}

console.log(risultato);
// Esercizio 5: Fusione Array di Oggetti

// Crea una funzione che prenda due array di oggetti persona (con nome e età) e restituisca un unico array contenente tutte le persone senza duplicati (considera uguali due persone con stesso nome e stessa età).