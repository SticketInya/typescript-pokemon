import { Champion, Pokemon } from "./types";

export class Arena {
  protected champion: Champion;

  constructor(
    champion: Champion,
    private pokemon: Pokemon,
    private enemyPokemon: Pokemon
  ) {
    this.champion = champion;
  }

  public nameFunction(input: string) {
    console.log(this.champion.name);
  }

  public wouldMyPokemonWinInAFight(): boolean {
    console.log(this.pokemon.name, this.enemyPokemon.name);
    return true;
  }
}

// function wouldMyPokemonWinInAFight(
//   myPokemon: Pokemon,
//   enemyPokemon: Pokemon
// ): boolean {
//   return true;
// }
