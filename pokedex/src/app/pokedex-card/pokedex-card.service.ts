import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, map } from 'rxjs/operators'
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
      map((response: any) => response.results ),
      tap(console.log)
    );
  }

  listAbilities(name: string){
    return this.http.get(`${this.API}/${name}`)
    .pipe(
      map(response=>response),
      tap(console.log)
    );
  }
}
