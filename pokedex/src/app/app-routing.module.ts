import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component'
import { PokedexAbilitiesComponent } from './pokedex-abilities/pokedex-abilities.component'

const routes: Routes = [
  {path: '', component: PokedexCardComponent},
  {path: 'pokemon/:id', component: PokedexAbilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
