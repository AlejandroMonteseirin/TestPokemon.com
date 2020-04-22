import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';
import { SpinerComponent } from './components/spiner/spiner.component';
import { MainTestInEnglishComponent } from './main-test-in-english/main-test-in-english.component';
import { MainTestInSpanishComponent } from './main-test-in-spanish/main-test-in-spanish.component';



@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent,
    MainTestInEnglishComponent,
    MainTestInSpanishComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule,
    HttpClientModule,
    
    ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
