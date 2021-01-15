import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component'
import { ContentComponent } from './content/content.component'
import { ListComponent } from './list/list.component'



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
    // loadChildren: () => import('./add/add.module').then(m => m.AddModule)
  },
  {
    path: 'content',
    component: ContentComponent
    // loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
