import { Injectable } from '@angular/core';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { GetPokemonService } from '../get-pokemon/get-pokemon.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  constructor(private pokemonService: GetPokemonService) { }

  public selected = new Subject<PokemonStats>();
  public selected$ = this.selected.asObservable();

  public setPokemon(id: number) {
    this.pokemonService.getPokemonStats(id).subscribe(pokemon => this.selected.next(pokemon));
  }
}
