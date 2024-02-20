export interface Pokemon{
  name: string;
  url: string;
}

export interface ResponsePokemon {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export interface PokemonDetails extends Pokemon {
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  imageUrl?: string;
};

interface Ability {
  ability: {
      name: string;
      url: string;
  };
};

interface Type {
  type: {
      name: string;
      url: string;
  };
};

