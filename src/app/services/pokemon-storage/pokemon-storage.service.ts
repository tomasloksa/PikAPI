import { Injectable } from '@angular/core';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { GetPokemonService } from '../get-pokemon/get-pokemon.service';
import { Observable, of, Subject } from 'rxjs';
import { PokemonStatsAPI } from 'src/app/models/api/pokemonStatsAPI';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  constructor(private pokemonService: GetPokemonService) { }

  public selected = new Subject<PokemonStats>();
  public selected$ = this.selected.asObservable();

  public setPokemon(id: number) {
    let pokemon = this.pokemonService.getPokemonStats(id);
    console.log(pokemon);
    this.selected.next(pokemon);
    this.selected.subscribe(x => console.log(x));
  }
}
