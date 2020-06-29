export class PokemonAPI {
  id: number;
  name: string;
  sprites: Sprites;
}

class Sprites {
  // tslint:disable: variable-name
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
