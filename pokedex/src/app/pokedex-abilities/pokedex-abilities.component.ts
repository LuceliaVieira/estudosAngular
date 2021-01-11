import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-pokedex-abilities',
  templateUrl: './pokedex-abilities.component.html',
  styleUrls: ['./pokedex-abilities.component.css']
})
export class PokedexAbilitiesComponent implements OnInit {

  idPokemon: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(ret =>{
      console.log(ret);
      this.idPokemon = ret.id
    })
   }

  ngOnInit(): void {
  }

}
