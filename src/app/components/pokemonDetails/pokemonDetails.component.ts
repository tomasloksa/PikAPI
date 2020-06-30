import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from 'src/app/services/get-pokemon/get-pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private pokemonService: GetPokemonService) { }

  public pokemon$;

  ngOnInit() {
    this.pokemon$ = this.pokemonService.pokemon$;
  }
}
