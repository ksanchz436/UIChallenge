import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
//import { SnackbarModule } from './snackbar/snackbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //SnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
