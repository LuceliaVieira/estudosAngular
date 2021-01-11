import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, delay, map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Pokemon } from  './pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokedexCardService {

  constructor(private http:HttpClient) { }

  private readonly API = `${environment.listPokemon}` ;

  list(){
    return this.http.get(this.API)
    .pipe(
      delay(2000),
      map(response=>response.results),
      tap(console.log)
    );
  }

  listAbilities(name: string){
    return this.http.get(`${this.API}/${name}`)
    .pipe(
      delay(2000),
      map(response=>response.abilities),
      tap(console.log)
    );
  }
}
