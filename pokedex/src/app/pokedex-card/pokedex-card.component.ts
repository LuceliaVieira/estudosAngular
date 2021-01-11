import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokedexCardService } from './pokedex-card.service'
import { Pokemon } from './pokemon'


@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent implements OnInit {

  pokemons:any;

  pokemons$!: Observable<Pokemon[]>;

  constructor(private service:PokedexCardService) { }

  ngOnInit(): void {

    this.pokemons$ = this.service.list();

    // this.service.list()
    // .subscribe(results => console.log(this.pokemons = results));
  }

  teste(name: string){
    this.service.listAbilities(name)
    .subscribe(results => console.log(this.pokemons = results))
  }



}
