import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon';
import { Observable, of, forkJoin } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { PokemonStats } from '../../models/pokemonStats';
import { PokemonAPI } from '../../models/api/pokemonAPI';
import { PokemonStatsAPI } from '../../models/api/pokemonStatsAPI';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {
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

  pokemon$ = this.getAllPokemon(5);
  pokemonStats$: Observable<PokemonStats[]>;

  getAllPokemon(count: number): Observable<Pokemon[]> {
    const pokemonArray: Pokemon[] = [];
    const ids: number[] = [];
    for (let index = 0; index < count; index++) {
      const pokemonId = Math.floor(Math.random() * 807) + 1;
      ids.push(pokemonId);
      const url = `${this.pokemonUrl}/${pokemonId}`;
      this.http.get(url)
        .pipe(take(1))
        .subscribe((data: PokemonAPI) => {
          pokemonArray.push({ id: data.id, name: data.name, imgUrl: data.sprites.front_default });
        });
    }
    this.pokemonStats$ = this.getAllPokemonStats(ids);
    return of(pokemonArray);
  }

  getAllPokemonStats(ids: number[]): Observable<PokemonStats[]> {
    return forkJoin(ids.map(id => {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    })).pipe(
      map(results => results.map((data: PokemonStatsAPI) => ({
        id: data.id,
        name: data.name,
        speed: data.stats[0].base_stat,
        hp: data.stats[5].base_stat,
        attack: data.stats[4].base_stat,
        defense: data.stats[3].base_stat
      }))),
    );
  }

  getPokemonStats(id: number): any {
    return this.pokemonStats$
    .pipe(take(1))
    .subscribe(stats => {
      for (const stat of stats) {
        if (stat.id === id) {
          return stat;
        }
      }
    });
  }
}
