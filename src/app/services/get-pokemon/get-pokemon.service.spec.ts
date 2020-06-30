/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPokemonService } from './get-pokemon.service';

describe('Service: Pokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPokemonService]
    });
  });

  it('should ...', inject([GetPokemonService], (service: GetPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
