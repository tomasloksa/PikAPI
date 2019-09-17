import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable, of, EMPTY } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { PokemonStats } from './pokemonStats';

@Injectable({
  providedIn: 'root'
})
export class PokemonService
{
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon-form';

  httpOptions =
    {
      HttpHeaders: new HttpHeaders
        ({
          'Content-Type': 'application/json'
        })
    };

  constructor(
    private http: HttpClient
  ) { }

  pokemon$ = this.getPokemon(5);

  getPokemon(count: number): Observable<Pokemon[]>
  {
    const pokemonArray: Pokemon[] = [];
    for (let index = 0; index < count; index++)
    {
      const pokemonId = Math.floor(Math.random() * 807) + 1;
      const url = `${this.pokemonUrl}/${pokemonId}`;
      const sub = this.http.get(url).subscribe(
        data =>
        {
          pokemonArray.push({ id: data['id'], name: data['name'], imgUrl: data["sprites"]["front_default"] });
        });
      sub.unsubscribe;
    }
    return of(pokemonArray);
  }

  getPokemonStats(selectedId: number): Observable<PokemonStats>
  {
    let pokemonStats: PokemonStats;
    const statUrl = 'https://pokeapi.co/api/v2/pokemon/' + selectedId;
    const sub = this.http.get(statUrl).subscribe(
      data =>
      {
        // console.log(`StreamStatov: ${JSON.stringify(data)}`);
        pokemonStats = {
          id: selectedId,
          speed: data['stats']['0']['base_stat'],
          hp: data['stats']['5']['base_stat'],
          attack: data['stats']['4']['base_stat'],
          defense: data['stats']['3']['base_stat']
        };
      });
    sub.unsubscribe;
    return of(pokemonStats);
  }


  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> =>
    {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
