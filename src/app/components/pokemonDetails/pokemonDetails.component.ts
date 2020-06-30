import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from 'src/app/services/get-pokemon/get-pokemon.service';
import { PokemonStorageService } from 'src/app/services/pokemon-storage/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(
    private pokemonService: GetPokemonService,
    private storageService: PokemonStorageService
    ) { }

  public pokemon$;

  ngOnInit() {
    this.pokemon$ = this.pokemonService.pokemon$;
  }
}
