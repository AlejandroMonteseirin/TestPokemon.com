import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
//import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
   // private router: Router
  ) {}

  setMetaTags(config?: any) {
    config = {
      title: `TestPokemon.com`,
      description: `TestPokemon.com es una pagina web en la cual puedes hacer un interactivo test para descubrir el pokemon al que mas te pareces, se basa en un algoritmo inteligente que te proporcionará los 3 pokemons a los que más te pareces.Es gratis y opensource`,
      image: `https://www.testPokemon.com/assets/ico.png`,
      //url: `https://www.ventrips.com/${this.router.url}`,
      url: `https://www.testPokemon.com`,
    };

    // Set title
    this.title.setTitle(config.title);
  
    // Google
    this.meta.updateTag({ name: 'Description', content: config.description });



    this.meta.updateTag({ name: 'instagram:card', content: 'summary' });
    this.meta.updateTag({ name: 'instagram:site', content: 'https://www.instagram.com/_testpokemon.com_/' });
    this.meta.updateTag({ name: 'instagram:title', content: '_testpokemon.com_' });
    this.meta.updateTag({ name: 'instagram:description', content: 'Averigua que pokémon eres haciendo el test más completo de todo Internet. Comparte con tus amigos y comparad vuestros resultados.' });
    this.meta.updateTag({ name: 'instagram:image', content: 'https://www.testPokemon.com/assets/ico.png' });

    
    // Twitter
    /*
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: `@Ventrips` });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    */

    // Facebook and other social sites
    /*
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: `Ventrips` });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'fb:app_id', content: `your-facebook-app-id` });
    */
    console.log("meta tags colocadas!");
  }
}