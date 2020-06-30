import { Injectable } from '@angular/core';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { GetPokemonService } from '../get-pokemon/get-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  constructor(private pokemonService: GetPokemonService) { }

  selected: PokemonStats;

  public setPokemon(id: number) {
    this.selected = this.pokemonService.getPokemonStats(id);
  }

  public getPokemon(): PokemonStats {
    return this.selected;
  }
}
