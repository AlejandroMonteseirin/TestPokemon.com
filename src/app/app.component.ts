import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemonElegido=undefined;
  puntosTotales=[0,0,0];
  pokemons=[
                          //mongolo,wenagente,fuerte
    {'nombre':"Bulbasur",'puntos':[70,60,-30]},
    {'nombre':"Machamp",'puntos':[-40,-80,99]},
    {'nombre':"Charmander",'puntos':[5,30,0]},
    {'nombre':"Metapod",'puntos':[90,10,-90]},
    {'nombre':"Raticate",'puntos':[20,-30,10]},
    {'nombre':"Digglet",'puntos':[40,0,70]},
    {'nombre':"Jiglypuff",'puntos':[50,80,-20]},
    {'nombre':"Blastoise",'puntos':[-80,-76,85]},
    {'nombre':"Grimer",'puntos':[60,-40,5]},
    {'nombre':"Gengar",'puntos':[-80,-99,80]},
    {'nombre':"Magikarp",'puntos':[80,40,-60]},
    {'nombre':"Lickitung",'puntos':[30,-40,30]},
    {'nombre':"Ditto",'puntos':[70,20,-20]},



  ]
  
  preguntas=[
    {'id':0,'pregunta':"Una noche fría de invierno entra en tu casa un ladrón en busca de cobijo y tus más preciados mangas hentai, ¿Qué haces?",
    'respuesta1':{'texto':"Lo mato con un tenedor",'puntos':[0,-1,2]},
    'respuesta2':{'texto':"Lo adopto y comparto todos mis bienes",'puntos':[3,2,0]},
    'respuesta3':{'texto':"Lo encadeno junto a los demás",'puntos':[0,-5,2]},
    'respuesta4':{'texto':"Huyo aterrorizado y llamo a la policia",'puntos':[-1,0,-1]},
    'respondida':false
    },
    {'id':1,'pregunta':"Vas andando por la ciudad de japón y encuentras una katana reluciente en el suelo ¿Qué haces?",
    'respuesta1':{'texto':"La robo sutilmente",'puntos':[-1,-1,0]},
    'respuesta2':{'texto':"La estreno con el vecino extranjero que no habla mi idioma",'puntos':[1,-3,2]},
    'respuesta3':{'texto':"La llevo a objetos perdidos o a la comisaria",'puntos':[0,1,0]},
    'respuesta4':{'texto':"La ignoro y sigo andando",'puntos':[0,0,-1]},
    'respondida':false
    },
    {'id':2,'pregunta':"Acabas de ganar la lotería, ¿En qué piensas gastarte el dinero?",
    'respuesta1':{'texto':"Lo dono todo a una dudosa organización que dice ayudar a un país tercermundista",'puntos':[2,2,0]},
    'respuesta2':{'texto':"Lo gasto todo en una desenfrenada noche la cual no me acordaré de haber vivido al día siguiente",'puntos':[1,-2,-1]},
    'respuesta3':{'texto':"Ahorro el dinero para el futuro",'puntos':[-2,0,1]},
    'respuesta4':{'texto':"Comparto parte del dinero con mis seres queridos y me quedo con el resto",'puntos':[-1,2,0]},
    'respondida':false
    },
    {'id':3,'pregunta':"Durante una cena en un restaurante lujoso, tu fiel amigo Eustaquio, resulta envenenado con cianuro ¿Como reaccionas?",
    'respuesta1':{'texto':"Entro en cólera y destruyo a todas las personas que me parezcas sospechosas, para vengarle",'puntos':[2,-2,5]},
    'respuesta2':{'texto':"Recuerdo mis 400 lecturas de misterios y asesinatos, e inicio una investigación para hallar al culpable",'puntos':[-3,1,1]},
    'respuesta3':{'texto':"Empiezo a llorar mientras acabo mi postre",'puntos':[2,0,-2]},
    'respuesta4':{'texto':"Llamo a la policia y le cuento lo ocurrido",'puntos':[-1,0,0]},
    'respondida':false
    },
    {'id':4,'pregunta':"Tu perro explota sin explicación. Esta muerto, Sólo queda una pierna",
    'respuesta1':{'texto':"Entierro la pierna y realizo un bonito funeral",'puntos':[-1,1,1]},
    'respuesta2':{'texto':"Lloro desconsoladamente durante horas, mientras abrazo la pierna",'puntos':[1,2,-2]},
    'respuesta3':{'texto':"Me como la pierna, hay que aprovechar todas las proteinas",'puntos':[-2,-2,2]},
    'respuesta4':{'texto':"Encuentro una solución a porque explotó tras 14 años estudiando física cuántica",'puntos':[-5,0,0]},
    'respondida':false
    },
    {'id':5,'pregunta':"Soy escorpio, mi horoscopo me advierte...",
    'respuesta1':{'texto':"'Hoy va a ser un dia con mucha suerte', asi que aprovecho y compro 100 boletos de loteria",'puntos':[3,0,0]},
    'respuesta2':{'texto':"'Eres un modelo a seguir por tu inteligencia', asi que lo uso como escusa para no estudiar para el examen",'puntos':[2,0,0]},
    'respuesta3':{'texto':"'Ten cuidado de los tauro, te intentan engañar', Le parto las piernas a mi abuela tauro, no vaya a atreverse a hacerme algo",'puntos':[2,-2,2]},
    'respuesta4':{'texto':"No creo en el horoscopo, no leo la advertencia",'puntos':[-2,0,0]},
    'respondida':false
    },

  
  
  
  
  ]
  constructor(private http:HttpClient) {
   
  }
  
  public clikado(respuesta,pregunta){
    console.log(respuesta);
    this.preguntas[pregunta.id]['respondida']=true;
    this.puntosTotales[0]=this.puntosTotales[0]+respuesta.puntos[0];
    this.puntosTotales[1]=this.puntosTotales[1]+respuesta.puntos[1];
    this.puntosTotales[2]=this.puntosTotales[2]+respuesta.puntos[2];
    console.log(this.puntosTotales);

  }

  public eligePokemon(){
    let multiplicador=10;
    let pokemonElegido=undefined;
    let puntos;
    this.puntosTotales[0]=this.puntosTotales[0]*10;
    this.puntosTotales[1]=this.puntosTotales[1]*10;
    this.puntosTotales[2]=this.puntosTotales[2]*10;

    for(let pokemon of this.pokemons){
      let puntosPokemon=0;
      puntosPokemon=Math.abs(pokemon.puntos[0]-this.puntosTotales[0])+Math.abs(pokemon.puntos[1]-this.puntosTotales[1])+Math.abs(pokemon.puntos[2]-this.puntosTotales[2]);
      console.log(puntosPokemon,pokemon.nombre);
      if(pokemonElegido==undefined){
        pokemonElegido=pokemon;
        puntos=puntosPokemon;
      }

      if(puntosPokemon<puntos){
        pokemonElegido=pokemon;
        puntos=puntosPokemon;
      }
    }
    console.log(pokemonElegido,puntos);
    this.pokemonElegido=pokemonElegido;
  }
  
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
 


}
