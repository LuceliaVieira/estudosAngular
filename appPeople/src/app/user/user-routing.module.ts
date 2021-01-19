import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserFormsComponent } from './user-forms/user-forms.component'

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'new',
    component: UserFormsComponent
  },
  {
    path: 'edit/:id',
    component: UserFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
