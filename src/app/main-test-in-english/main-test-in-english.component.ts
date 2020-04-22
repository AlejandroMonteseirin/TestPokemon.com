import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-main-test-in-english',
  templateUrl: './main-test-in-english.component.html',
  styleUrls: ['./main-test-in-english.component.css']
})
export class MainTestInEnglishComponent implements OnInit {

  pokemonElegido=undefined;
  puntosTotales=[0,0,0];
  testIniciado=false;
  loading=false;
  pokemons=[
                          //mongolo,wenagente,fuerte
    {'nombre':"Bulbasur",'puntos':[70,60,-30]},
    {'nombre':"Machamp",'puntos':[-40,-60,99]},
    {'nombre':"Charmander",'puntos':[10,50,0]},
    {'nombre':"Metapod",'puntos':[90,0,-90]},
    {'nombre':"Raticate",'puntos':[20,-30,10]},
    {'nombre':"Diglett",'puntos':[40,0,70]},
    {'nombre':"Jiglypuff",'puntos':[50,80,-20]},
    {'nombre':"Blastoise",'puntos':[-80,-60,85]},
    {'nombre':"Grimer",'puntos':[60,-40,5]},
    {'nombre':"Gengar",'puntos':[-80,-99,80]},
    {'nombre':"Magikarp",'puntos':[80,40,-60]},
    {'nombre':"Lickitung",'puntos':[30,-40,30]},
    {'nombre':"Ditto",'puntos':[70,20,-30]},
    {'nombre':"Eevee",'puntos':[20,60,15]},
    {'nombre':"Bellsprout",'puntos':[40,20,20]},
    {'nombre':"Pikachu",'puntos':[-50,50,40]},
    {'nombre':"Meowth",'puntos':[-30,-70,10]},
    {'nombre':"Clefable",'puntos':[-30,-10,-30]},
    {'nombre':"Chansey",'puntos':[10,20,40]},
    {'nombre':"Jynx",'puntos':[-40,0,-40]},

  ]
  
  preguntas=[
    {'id':0,'pregunta':"On a cold winter night, a thief enters your house in search of shelter and your most precious hentai manga, what will you do?",
    'respuesta1':{'texto':"I'll kill him with a fork",'puntos':[0,-1,1]},
    'respuesta2':{'texto':"I'll adopt it and share with him all my things",'puntos':[3,2,0]},
    'respuesta3':{'texto':"I chain him together with the others",'puntos':[0,-3,2]},
    'respuesta4':{'texto':"I run away terrified and call the police",'puntos':[-1,0,-1]},
    'respondida':false
    },
    {'id':1,'pregunta':"You are walking through a city in Japan and you find a beautiful katana on the ground of the street, what will you do?.",
    'respuesta1':{'texto':"I steal it subtly",'puntos':[-1,-1,0]},
    'respuesta2':{'texto':"I use it with the foreign neighbor who doesn't speak my language",'puntos':[1,-3,2]},
    'respuesta3':{'texto':"I take it to the police station",'puntos':[0,1,0]},
    'respuesta4':{'texto':"I ignore it and I keep walking",'puntos':[0,0,-1]},
    'respondida':false
    },
    {'id':2,'pregunta':"You just won the lottery, what will you do with money on?",
    'respuesta1':{'texto':"I grant everything to a dubious organization to help in a third world country",'puntos':[2,2,0]},
    'respuesta2':{'texto':"I spend it all on a wild night which I won't remember the next day",'puntos':[1,-2,0]},
    'respuesta3':{'texto':"I save money for the future",'puntos':[-2,0,0]},
    'respuesta4':{'texto':"I share some of the it with my loved ones and I keep the rest",'puntos':[-1,1,0]},
    'respondida':false
    },
    {'id':3,'pregunta':"During a dinner in a luxurious restaurant, your faithful friend Eustaquio is poisoned with cyanide. How do you react?",
    'respuesta1':{'texto':"I go mad, and kill everybody in the room",'puntos':[2,-2,3]},
    'respuesta2':{'texto':"I remember my 400 readings of books abouts mysteries and murders, and started an investigation to find the culprit.    ",'puntos':[-2,1,1]},
    'respuesta3':{'texto':"I start crying while I finish my dessert",'puntos':[2,0,-2]},
    'respuesta4':{'texto':"I call the police and tell him what happened",'puntos':[-1,0,0]},
    'respondida':false
    },
    {'id':4,'pregunta':"Your dog explodes without explanation. He's dead, there's only one leg left",
    'respuesta1':{'texto':"I bury my leg and have a nice funeral",'puntos':[-1,1,1]},
    'respuesta2':{'texto':"I cry uncontrollably for hours, while I hug the leg",'puntos':[1,2,-2]},
    'respuesta3':{'texto':"I eat the leg, we must take advantage of all the proteins",'puntos':[-1,-3,0]},
    'respuesta4':{'texto':"I find a solution to why it exploded after 14 years studying quantum physics only for get the answer",'puntos':[-4,0,0]},
    'respondida':false
    },
    {'id':5,'pregunta':"I'm scorpio, my horoscope warns me ...",
    'respuesta1':{'texto':"'Today is going to be a very lucky day', so I take advantage and buy 100 lottery tickets",'puntos':[3,0,0]},
    'respuesta2':{'texto':"'You are a role model for your intelligence', so I use it as an excuse not to study for the exam",'puntos':[2,-1,0]},
    'respuesta3':{'texto':"'Be careful with the Taurus people, they are trying to deceive you', I break my Taurus grandmother's legs, do not dare to do something to me    ",'puntos':[2,-2,2]},
    'respuesta4':{'texto':"I don't believe in the horoscope, I don't read the warning",'puntos':[-1,0,0]},
    'respondida':false
    },
    {'id':6,'pregunta':"Nuclear attack on your city! There is only room for one more person in the shelter",
    'respuesta1':{'texto':"I fight with everyone to make sure the disabled girl enters the shelter",'puntos':[-1,3,1]},
    'respuesta2':{'texto':"I cry so much that they let me in because i see too patethic",'puntos':[1,-1,-2]},
    'respuesta3':{'texto':"I kill those inside the shelter so that all my friends can enter",'puntos':[-1,-1,2]},
    'respuesta4':{'texto':"I hide in the fridge, in the movies it works!",'puntos':[1,0,0]},
    'respondida':false
    },
    {'id':7,'pregunta':"While you are in the macdonal, a hungry child asks you for some potatoes, what do you do?",
    'respuesta1':{'texto':"Go to the box and buy 14 bicmacs and give them to them",'puntos':[0,1,0]},
    'respuesta2':{'texto':"I beat him up, he cant be hungry if is unconscious",'puntos':[0,-2,1]},
    'respuesta3':{'texto':"I give him my credit card and the password",'puntos':[2,2,0]},
    'respuesta4':{'texto':"I give him a potato that was a little burnt and I didn't want it either",'puntos':[-1,-1,0]},
    'respondida':false
    },
    {'id':8,'pregunta':"Global pandemic, you have to stay home to avoid contagion",
    'respuesta1':{'texto':"I stay at home and support the toilets by twitter",'puntos':[-1,1,0]},
    'respuesta2':{'texto':"I'm the patient 0, I love eating raw zubat",'puntos':[2,0,0]},
    'respuesta3':{'texto':"I spread the virus around the world, only the strong like me must survive",'puntos':[0,-1,1]},
    'respuesta4':{'texto':"I play my country's anthem at full volume all the time to liven up the neighborhood",'puntos':[1,0,0]},
    'respondida':false
    },
    {'id':9,'pregunta':"World war, i am recruited",
    'respuesta1':{'texto':"I do a little dirty job to a commander to avoid going to the battlefield",'puntos':[-1,0,-1]},
    'respuesta2':{'texto':"I'm going to punch a tank",'puntos':[1,0,1]},
    'respuesta3':{'texto':"My multiple chronic illnesses and poor general health prevent me from going to the battlefield, in fact I begin to receive a payment from the state to compensate them",'puntos':[0,0,-1]},
    'respuesta4':{'texto':"I reluctantly go to the front line of infantry",'puntos':[0,0,0]},
    'respondida':false
    }
  ];

  preguntaFinal= {'id':8,'pregunta':"You just did this amazing pokemon test, what do you do?",
  'respuesta1':{'texto':"I push the donation button at the end of the page, and I donate a few dolars to paypal, for pay the servers",'puntos':[1,2,0]},
  'respuesta2':{'texto':"I got bulbasur, I break the laptop screen and shit in the creator of the test",'puntos':[2,-1,1]},
  'respuesta3':{'texto':"I'm poor so I share it with my friends, let's see if they don't have metapod like me :(",'puntos':[0,1,0]},
  'respuesta4':{'texto':"I finish the test in silence and continue my play of minecraft, without sharing or donating because i dont care about the effort of the creator ",'puntos':[0,-1,0]},
  'respondida':false
  };
  preguntasElegidas=[];
  constructor(private http:HttpClient,private seo: SeoService) {
    this.seo.setMetaTags(null);
  }


  ngOnInit(){
    for (var _i = 0; _i < 8; _i++) {
      let azar=Math.floor(Math.random() * (this.preguntas.length ));
      /*if(this.preguntas[azar]==undefined){
        console.log(azar);
        console.log(this.preguntas.length);
        console.log(this.preguntas);
        return false;
      }*/
      this.preguntas[azar].id=_i;
      this.preguntasElegidas.push(this.preguntas[azar]);
      this.preguntas.splice(azar,1);
      
    }
    this.preguntasElegidas.push(this.preguntaFinal);
    console.log(this.preguntasElegidas);
  }

  public iniciarTest(){
    this.testIniciado=true;
  }

  
  public clikado(respuesta,pregunta){
    this.preguntasElegidas[pregunta.id]['respondida']=true;
    this.puntosTotales[0]=this.puntosTotales[0]+respuesta.puntos[0];
    this.puntosTotales[1]=this.puntosTotales[1]+respuesta.puntos[1];
    this.puntosTotales[2]=this.puntosTotales[2]+respuesta.puntos[2];

  }

  public eligePokemon(){
    this.loading=true;
    let multiplicador=10;
    let pokemonElegido=undefined;
    let puntos;
    this.puntosTotales[0]=this.puntosTotales[0]*10;
    this.puntosTotales[1]=this.puntosTotales[1]*10;
    this.puntosTotales[2]=this.puntosTotales[2]*10;

    if( this.puntosTotales[0]>100){
      this.puntosTotales[0]=100;
    }
    if( this.puntosTotales[1]>100){
      this.puntosTotales[1]=100;
    }
    if( this.puntosTotales[2]>100){
      this.puntosTotales[2]=100;
    }
    
    if( this.puntosTotales[0]<-100){
      this.puntosTotales[0]=-100;
    }
    if( this.puntosTotales[1]<-100){
      this.puntosTotales[1]=-100;
    }
    if( this.puntosTotales[2]<-100){
      this.puntosTotales[2]=-100;
    }

    for(let pokemon of this.pokemons){
      let puntosPokemon=0;
      puntosPokemon=Math.abs(pokemon.puntos[0]-this.puntosTotales[0])+Math.abs(pokemon.puntos[1]-this.puntosTotales[1])+Math.abs(pokemon.puntos[2]-this.puntosTotales[2]);
      pokemon['total']=puntosPokemon;
      if(pokemonElegido==undefined){
        pokemonElegido=pokemon;
        puntos=puntosPokemon;
      }

      if(puntosPokemon<puntos){
        pokemonElegido=pokemon;
        puntos=puntosPokemon;
      }
    }
    this.pokemons.sort(function(a, b) {
      return a['total'] - b['total'];
    });
    console.log(this.puntosTotales);

    console.log(this.pokemons);
    let azar=Math.floor(Math.random() * (3 - 0));
    this.delay(3000).then(()=>{
      this.loading=false;
      this.pokemonElegido=this.pokemons[azar];
    });
    
  }
  
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  public  refresh(): void {
      window.location.reload();
  }
  
 
  
}
