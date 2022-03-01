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
  type: PokemonType.FIRE,
};

const arena = new Arena(ash, charizard);

let number = 10;
number += 2;
console.log(number);
