import { Arena } from "./src/arena";
import { Champion, Pokemon, PokemonType } from "./src/types";

console.log("start");
// {} = Object
// [] = Array
const ash: Champion = {
  age: 14,
  name: "Ash Ketchum",
};
const charizard: Pokemon = {
  name: "Charizard",
  type: [PokemonType.FIRE],
};
const blastoise: Pokemon = {
  name: "Blastoise",
  type: [PokemonType.WATER],
};
const venosaur: Pokemon = {
  name: "Venosaur",
  type: [PokemonType.GRASS, PokemonType.POISON],
};

const arena = new Arena(ash, venosaur, blastoise);

function sayMyName(champ: Champion): void {
  console.log(`My name is: ${champ.name}`);
}

// let number = 10;
// number += 2;
// console.log(number);

// sayMyName(ash);
// const isMyPokemonTheWinner = arena.wouldMyPokemonWinInAFight(blastoise, charizard);
const numberOfMatches = 10;
playNumberOfMatches(numberOfMatches, arena);


function playNumberOfMatches(numberOfMatches: number, arena: Arena):void{
  let myPokemonWinCount = 0;
  for(let i = 0; i< numberOfMatches; i++){
    if(arena.wouldMyPokemonWinInAFight()){
      myPokemonWinCount++;
    }
  }
  const pokemonWinRate = (myPokemonWinCount/numberOfMatches)*100;
  console.log(`Your Pokemon's winrate is ${pokemonWinRate}% !`);
}


// if(isMyPokemonTheWinner){
//   console.log("You won!");
// }
// else {
//   console.log("You lost!");
// }

// // branch
// if (isMyPokemonTheWinner) {
//   console.log("happpynesfjasl;dfj");
// } else {
//   console.log("sad very sad");
// }
// // for
// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
// //foreach
// [1, 2, 3, 4, 5].forEach((num: number) => {
//   console.log(num);
//   // non return/breakable
// });
// // forof
// for (const num of [1, 2, 3, 4, 5]) {
//   // Sequential and can be broken with return;
// }
// //Map
// const duplicate = [1, 3, 4].map((number) => number * 2);
// //While
// let i = 0;
// while (i < 3) {
//   i++;
// }
// // Object Iteration
// Object.keys(console.log);
// Object.keys(charizard).forEach((key) => {
//   console.log(key);
//   console.log(ash.name);
// });
