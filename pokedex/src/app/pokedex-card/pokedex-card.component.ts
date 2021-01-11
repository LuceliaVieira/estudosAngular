import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokedexCardService } from './pokedex-card.service'
import { Pokemon } from './pokemon'
import { Router } from '@angular/router'


@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent implements OnInit {

  pokemons:any;

  pokemons$!: Observable<Pokemon[]>;

  constructor(private service:PokedexCardService, private route: Router) { }

  ngOnInit(): void {

    this.pokemons$ = this.service.list();

  }

  teste(name: string){
    this.service.listAbilities(name)
    .subscribe(ability => console.log(this.pokemons = ability))

    this.route.navigate(['/pokemon/' + name])
  }



}
