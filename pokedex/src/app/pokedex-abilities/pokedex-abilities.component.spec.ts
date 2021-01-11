import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexAbilitiesComponent } from './pokedex-abilities.component';

describe('PokedexAbilitiesComponent', () => {
  let component: PokedexAbilitiesComponent;
  let fixture: ComponentFixture<PokedexAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
