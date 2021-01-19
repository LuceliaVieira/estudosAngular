import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  localStorageUsers: any = localStorage.getItem("users");
  constructor(private serviceListUsers: UserService) { }

  ngOnInit() {
    console.log(this.localStorageUsers);
    if(this.localStorageUsers === " " || this.localStorageUsers === undefined || this.localStorageUsers === null){
      this.serviceListUsers.list()
      .subscribe(data => this.users = data);
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA")
    } else {
      this.users = JSON.parse(this.localStorageUsers);

      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB");
    }

  }

}
