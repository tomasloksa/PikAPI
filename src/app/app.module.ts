import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonStatsComponent } from './components/PokemonStats/PokemonStats.component';
import { PokemonFightComponent } from './components/pokemonFight/pokemonFight.component';
import { PokemonDetailsComponent } from './components/pokemonDetails/pokemonDetails.component';

@NgModule({
   declarations: [
      AppComponent,
      PokemonDetailsComponent,
      PokemonStatsComponent,
      PokemonFightComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
