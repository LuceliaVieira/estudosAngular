import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http'
import { ContentComponent } from './content/content.component';
import { ChallengeComponent } from './challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
