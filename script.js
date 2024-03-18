// Fizz Buzz


// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//  for (let i = 1; i <= 100; i++){
    
//     if (i % 3 === 0 && i % 5 === 0) {

//         console.log("Fizz Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else{
//         console.log(i)
//     }
    
// }

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


// outer: for (let i = 90; i < 100; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         continue outer;
//       }
//     }
//     console.log(i, 'is prime');
//     break;
// }
// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let cell = '';

// while ()

// for (i = 0; i < 4; i++) {
//   for (c of csv) {
//     let row = '';
//     cell += c;
//     console.log(cell);
//     if (c === ',') {
//       row = `${cell} `;
//       continue;
//     }
//     console.log(row);
//   }
// }

const csv =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell = '';
let row = '';

for (c of csv) {
  cell += c;
  if (c === ',') {
    // console.log('CELL ', cell);
    row += `${cell} `;
    cell = '';
  }

  if (c === '\n') {
    row += `${cell}`;
    console.log(row);
    cell = '';
    row = '';
  }
}