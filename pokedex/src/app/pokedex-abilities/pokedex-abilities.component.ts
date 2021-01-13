import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokedexCardService } from '../pokedex-card/pokedex-card.service'

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pokedex-abilities',
  templateUrl: './pokedex-abilities.component.html',
  styleUrls: ['./pokedex-abilities.component.css']
})
export class PokedexAbilitiesComponent implements OnInit {

  namePokemon: any;
  conteudoPokemon: any;
  descriptionAbilities: any;
  panelOpenState = false;

  constructor(private route: ActivatedRoute, private API: PokedexCardService) {
    this.route.params.subscribe(ret =>{
        console.log(ret);
        this.namePokemon = ret.id;

        // this.API.listAbilities(this.namePokemon).subscribe(ret => console.log(ret))
        this.API.listAbilities(this.namePokemon)
        .subscribe(ret => this.conteudoPokemon = ret)
      })
   }

  ngOnInit(): void {

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      },
      1800: {
        items: 4
      }
    },
    nav: true
  }

  descriptionAbility(url: string){
    return this.API.listDescriptionAbilities(url).subscribe(resp=>this.descriptionAbilities = resp);
  }
}

