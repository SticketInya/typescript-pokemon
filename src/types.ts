export enum PokemonType {
  WATER = "water",
  FIRE = "fire",
  GRASS = "grass",
  POISON = "poison",
}

export type Champion = {
  name: string;
  age: number;
};
export interface Pokemon {
  type: PokemonType[];
  name: string;
}
