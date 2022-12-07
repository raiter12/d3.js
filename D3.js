/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 1
let y = 14
if (x < y)
{
    console.log(y,"e piu di", x )
}
  else {
    console.log(x,"e piu di", y )
  }
   /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
x = 5
y = 4
if(x != 4)
{
    console.log(x ,"è diverso da", y )
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 13
y = 5
if (x % y === 0)
{
    console.log("e divisibile di 5")

}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x8 = 10
let y8 = 2
 let somma = x8 + y8 
 let somma2 = x8-y8
 let somma3 = y8-x8 
if(somma ===8){
    console.log ("confermato x+y fa 8")
}
else if(x8===8||y8 ===8)
{
console.log ("confermo che uno dei numero è 8")
}
else if( somma2 ===8){
    console.log("confermo x-y fa uguale 8")
}
else if(somma3 ===8){
    console.log("confermo che y-x fa 8 ")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
valorecarrello=43
if(valorecarrello > 50) 
{
    console.log("spedizione gratuita" )
}
{
    console.log("spedizione 10 euro " ) 
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valorecarrello=43
if (valorecarrello1 > 50){
    console.log("sconto black:",(valorecarrello-((valorecarrello/100)*20)))
}
else if (valorecarrello2 < 50){
    console.log("sconto black",(valorecarrello-((valorecarrello/100)*20)+10))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
typeof 37 === "number";
console.log(typeof 42);
typeof "ciao" === "string";
console.log(typeof ciao);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pariedispari = 2
if (pariedispari ===0){
    console.log ("il numero è 0");
}
else if (pariedispari % 2 ===0){
    console.log("è pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 15 
if ( val < 5 ){
    console.log("ex.10:",val,"meno di 5");
}
else if (val < 10){
    console.log("ex.10:",val ,"meno di dieci ")
}
else if (val>= 10){
    console.log("ex.10:", val , "uguale a 10")
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me. Push(city, "toronto")
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const me = {
 name; 'John',
    lastName; 'Doe',
    skills; ['javascript', 'html', 'css'],
}

delete me.lastName
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills 
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
//let arrvuoto = []
arrvuoto = arrvuoto.Push(1,2,3,4,5,6,7,8,9,10);
console.log(arrvuta)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.


/* SCRIVI QUI LA TUA RISPOSTA */
arrvuto.splice(9,100)