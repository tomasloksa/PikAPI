import { PokemonStatsComponent } from './../PokemonStats/PokemonStats.component';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  public pokemon$;

  ngOnInit() {
    this.pokemon$ = this.pokemonService.pokemon$;
    this.showStats(1);
  }

  showStats(id: number) {
    new PokemonStatsComponent(this.pokemonService).showStats(id);
  }
}
