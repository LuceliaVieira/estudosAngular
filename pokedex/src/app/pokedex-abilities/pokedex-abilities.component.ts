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

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

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

  // descriptionAbility(conteudoPokemon: any){
  //   console.log(conteudoPokemon.ability.url);
  //    return this.API.listDescriptionAbilities(conteudoPokemon.ability.url).subscribe(resp=>console.log(resp));

  // }

  descriptionAbility(url: string){
    //console.log("url", url);
    return this.API.listDescriptionAbilities(url).subscribe(resp=>this.descriptionAbilities = resp);
    //return this.API.listDescriptionAbilities(url).subscribe(resp=>console.log(resp));

  }
}

