import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatBadgeModule
} from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatBadgeComponent } from './components/mat-badge/mat-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    MatBadgeComponent
  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
