import { PokemonStatsComponent } from './../PokemonStats/PokemonStats.component';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonDetails',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  public pokemon$;

  ngOnInit()
  {
    this.pokemon$ = this.pokemonService.pokemon$;
  }

  showStats(id: number)
  {
    console.log(id);
    new PokemonStatsComponent(this.pokemonService).showStats(id);
  }





}
