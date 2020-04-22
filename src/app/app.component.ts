import { Component, ViewChild } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idioma:any='en';
  constructor(private seo: SeoService) {
    try{
      let idioma= window.navigator.language;
      console.log("idiomas del navegador: ");
      console.log(idioma);
      if(idioma.includes('en'))
        this.idioma='en';
      if(idioma.includes('es'))
        this.idioma='es';

      console.log("idioma elegido:"+ this.idioma);
    }catch(e){
      console.log("error averiguando tu idioma, se queda en ingles")
      console.log(e);
    }
    this.seo.setMetaTags(this.idioma);
  }
  public cambiarIdioma(idioma){
    this.idioma=idioma;
  }
}
