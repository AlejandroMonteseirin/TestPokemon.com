import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-x',
      adSlot: 0,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
