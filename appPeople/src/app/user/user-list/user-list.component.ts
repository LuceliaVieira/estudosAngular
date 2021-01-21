import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Principal } from '../principal';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  localStorageUsers: any = localStorage.getItem("users");
  users$: Observable<User[]>;
  error$: Subject<Object> = new Subject<Object>();

  constructor(private serviceListUsers: UserService){ }

  ngOnInit(): any {

    this.refresh();
  }

  refresh(){
    if(this.localStorageUsers === " " || this.localStorageUsers === undefined || this.localStorageUsers === null){
      this.serviceListUsers.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return EMPTY;
        })
      )
      .subscribe(data => {
        this.users$ = data;
      });

    } else {
      this.users$ = JSON.parse(this.localStorageUsers);
      console.log("aaa", this.users$);
    }
  }
}
