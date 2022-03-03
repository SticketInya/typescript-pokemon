export enum PokemonType {
  WATER = "water",
  FIRE = "fire",
  GRASS = "grass",
  POSION = "poison",
}

export type Champion = {
  name: string;
  age: number;
};
export interface Pokemon {
  type: PokemonType[];
  name: string;
}
