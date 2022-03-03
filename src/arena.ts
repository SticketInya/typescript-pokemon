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
    const doesFirstHaveAdvantage: boolean = this.hasTypeAdvantage(this.pokemon, this.enemyPokemon);
    const doesSecondHaveAdvantage: boolean = this.hasTypeAdvantage(this.enemyPokemon, this.pokemon);
    const odds: number = this.calculateOdds(doesFirstHaveAdvantage, doesSecondHaveAdvantage);
    const matchResult = Math.floor(Math.random() * 100);

    return matchResult <= odds;
  }

  private hasTypeAdvantage(pokemon1: Pokemon, pokemon2: Pokemon): boolean {
    if (pokemon1.type == null || pokemon2.type == null) return false;
    const results: boolean[] = pokemon1.type.map(element => {
      return this.isElementPriority(element, pokemon2.type);
    })
    const hasAdvantage = results.indexOf(true) !== -1;

    return hasAdvantage;
  }

  private isElementPriority(element1: string, element2: string[]): boolean {
    switch (element1) {
      case "grass":
        //return element2.includes("water");
        return element2.indexOf("water") !== -1;

      case "water":
        return element2.indexOf("fire") !== -1;

      case "fire":
        return element2.indexOf("grass") !== -1;

      default:
        return false;
    }
  }

  private calculateOdds(firstAdvantage: boolean, secondAdvantage: boolean): number {
    return firstAdvantage ? (secondAdvantage ? 50 : 70) : secondAdvantage ? 30 : 50;
  }

}

// function wouldMyPokemonWinInAFight(
//   myPokemon: Pokemon,
//   enemyPokemon: Pokemon
// ): boolean {
//   return true;
// }
