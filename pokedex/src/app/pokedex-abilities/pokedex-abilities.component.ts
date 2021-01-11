import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokedexCardService } from '../pokedex-card/pokedex-card.service'

@Component({
  selector: 'app-pokedex-abilities',
  templateUrl: './pokedex-abilities.component.html',
  styleUrls: ['./pokedex-abilities.component.css']
})
export class PokedexAbilitiesComponent implements OnInit {

  namePokemon: any;
  conteudoPokemon: any;

  constructor(private route: ActivatedRoute, private API: PokedexCardService) {
    this.route.params.subscribe(ret =>{
      console.log(ret);
      this.namePokemon = ret.id;

      // this.API.listAbilities(this.namePokemon).subscribe(ret => console.log(ret))
      this.API.listAbilities(this.namePokemon).subscribe(ret => this.conteudoPokemon = ret)

    })
   }

  ngOnInit(): void {
  }

}
