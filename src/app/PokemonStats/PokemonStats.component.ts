import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './PokemonStats.component.html',
  styleUrls: ['./PokemonStats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  public pokemonStats$;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonStats$ = this.pokemonService.getPokemonStats(1);
  }

  public showStats(id: number) {
    //this.pokemonStats$ = this.pokemonService.getPokemonStats(id);
  }
}
