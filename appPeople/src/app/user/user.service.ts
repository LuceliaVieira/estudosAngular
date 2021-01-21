import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { tap, delay, map, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = `${environment.API}`
  constructor(private http: HttpClient ) { }

  list():any{
    return this.http.get(this.API)
    .pipe(
      tap( (response:any) => localStorage.setItem("users", JSON.stringify(response))),
      map( (response:any) =>response)

    );
  }

  create(person){
    return this.http.post(this.API, person).pipe(take(1));
  }
}
