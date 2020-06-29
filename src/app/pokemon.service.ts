import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './models/pokemon';
import { Observable, of, EMPTY, from } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { PokemonStats } from './models/pokemonStats';
import { PokemonAPI } from './models/api/pokemonAPI';
import { PokemonStatsAPI } from './models/api/pokemonStatsAPI';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon-form';

  httpOptions = {
      HttpHeaders: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };

  constructor(
    private http: HttpClient
  ) { }

  pokemon$ = this.getPokemon(5);

  getPokemon(count: number): Observable<Pokemon[]> {
    const pokemonArray: Pokemon[] = [];
    for (let index = 0; index < count; index++) {
      const pokemonId = Math.floor(Math.random() * 807) + 1;
      const url = `${this.pokemonUrl}/${pokemonId}`;
      this.http.get(url)
        .pipe(take(1))
        .subscribe((data: PokemonAPI) => {
          pokemonArray.push({ id: data.id, name: data.name, imgUrl: data.sprites.front_default });
        });
    }
    return of(pokemonArray);
  }

  async getPokemonStats(selectedId: number): Promise<Observable<PokemonStats>> {
    let pokemonStats: PokemonStats;
    const statUrl = 'https://pokeapi.co/api/v2/pokemon/' + selectedId;
    const stats = await this.http.get(statUrl).toPromise();
    of(stats)
      .pipe(take(1))
      .subscribe(
        (data: PokemonStatsAPI) => {
          pokemonStats = {
            id: selectedId,
            speed: data.stats[0].base_stat,
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat
          };
        });
    console.log('stats', pokemonStats);
    return of(pokemonStats);
  }
}
