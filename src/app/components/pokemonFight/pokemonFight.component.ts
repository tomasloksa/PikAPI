import { Component, OnInit } from '@angular/core';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { PokemonStorageService } from 'src/app/services/pokemon-storage/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-fight',
  templateUrl: './pokemonFight.component.html',
  styleUrls: ['./pokemonFight.component.css']
})
export class PokemonFightComponent implements OnInit {

  constructor(private storageService: PokemonStorageService) { }
  choosePokemonText: string;

  ngOnInit() {
    this.choosePokemonText = 'Choose your pokemon';
    this.storageService.setPokemon(20);
    console.log('pod, prosim', this.storageService.getPokemon());
  }

  fight(pokemon1: PokemonStats, pokemon2: PokemonStats): number {
    let attacker = pokemon1.speed > pokemon2.speed ? 1 : 2;
    while (pokemon1.hp * pokemon2.hp >= 0) { // bojuju az kym jednemu z nich neklesne hp pod 0
      if (attacker === 1) {
        pokemon2.hp -= this.attack(pokemon1.attack, pokemon2.defense);
      } else {
        pokemon1.hp -= this.attack(pokemon2.attack, pokemon1.defense);
      }
      attacker = attacker === 1 ? 2 : 1;
    }
    return pokemon1.hp > 0 ? pokemon1.id : pokemon2.id;
  }

  attack(attack: number, defense: number): number {
    return (((2.4 * attack * attack) / defense * 50) + 2 * Math.floor(Math.random() * (255 - 217 + 1) + 217)) / 255;
  }
}
