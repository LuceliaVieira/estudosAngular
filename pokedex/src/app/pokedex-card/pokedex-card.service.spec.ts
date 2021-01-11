import { TestBed } from '@angular/core/testing';

import { PokedexCardService } from './pokedex-card.service';

describe('PokedexCardService', () => {
  let service: PokedexCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
