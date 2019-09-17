import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonStats } from '../pokemonStats';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-PokemonStats',
  templateUrl: './PokemonStats.component.html',
  styleUrls: ['./PokemonStats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  public pokemonStats$;
  // : Observable<PokemonStats>;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  public showStats(id: number)
  {
    console.log(id);
    this.pokemonStats$ = this.pokemonService.getPokemonStats(id);
    console.log(this.pokemonStats$.subscribe(data => data.id));
  }
}
