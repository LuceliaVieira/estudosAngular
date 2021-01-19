import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
