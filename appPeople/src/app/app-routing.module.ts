import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './challenge/challenge.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [

  {
    path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'content',
    component: ContentComponent
  },
  {
    path:'challenge',
    component: ChallengeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
