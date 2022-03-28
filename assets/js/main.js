/*
Programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
    Per i multipli di 3 stampi “Fizz” al posto del numero 
    Per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
    Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
    Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/


//// Ciclo per stampare tutti i numeri da 1 a 100
//MILESTONE 2
const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   box.innerHTML = i;
   row.append(box);
   box.style.fontWeight = "bold"
   box.style.fontSize = "larger"
   
//MILESTONE 1
//MILESTONE 3
   if ((i % 3 == 0) && (i % 5 == 0)) {
      box.classList.add("per3per5")
      box.innerHTML = "fizzbuzz";

//MILESTONE 1
//MILESTONE 3
   } else if (i % 3 == 0) {
      box.classList.add("per3")
      box.innerHTML = "fizz";

//MILESTONE 1
//MILESTONE 3
   } else if (i % 5 == 0) {
      box.classList.add("per5")
      box.innerHTML = "buzz";
   } 
      
};