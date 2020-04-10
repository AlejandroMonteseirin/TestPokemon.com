import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
