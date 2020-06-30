import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from 'src/app/services/get-pokemon/get-pokemon.service';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './PokemonStats.component.html',
  styleUrls: ['./PokemonStats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  public pokemonStats$: Observable<PokemonStats[]>;
  constructor(private pokemonService: GetPokemonService) { }

  ngOnInit() {
    this.pokemonStats$ = this.pokemonService.pokemonStats$;
  }
}
