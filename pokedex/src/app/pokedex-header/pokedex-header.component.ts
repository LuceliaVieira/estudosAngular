import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pokedex-header',
  templateUrl: './pokedex-header.component.html',
  styleUrls: ['./pokedex-header.component.css']
})
export class PokedexHeaderComponent implements OnInit {

  title:string = "Pokedex";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.route.navigate(['/pokemon/' + name])
  }

}
