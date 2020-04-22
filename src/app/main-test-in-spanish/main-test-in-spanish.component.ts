import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-main-test-in-spanish',
  templateUrl: './main-test-in-spanish.component.html',
  styleUrls: ['./main-test-in-spanish.component.css']
})
export class MainTestInSpanishComponent implements OnInit {

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
    {'id':0,'pregunta':"Una noche fría de invierno entra en tu casa un ladrón en busca de cobijo y tus más preciados mangas hentai, ¿Qué haces?",
    'respuesta1':{'texto':"Lo mato con un tenedor",'puntos':[0,-1,1]},
    'respuesta2':{'texto':"Lo adopto y comparto todos mis bienes",'puntos':[3,2,0]},
    'respuesta3':{'texto':"Lo encadeno junto a los demás",'puntos':[0,-3,2]},
    'respuesta4':{'texto':"Huyo aterrorizado y llamo a la policia",'puntos':[-1,0,-1]},
    'respondida':false
    },
    {'id':1,'pregunta':"Vas andando por una ciudad de japón y encuentras una katana reluciente en el suelo ¿Qué haces?",
    'respuesta1':{'texto':"La robo sutilmente",'puntos':[-1,-1,0]},
    'respuesta2':{'texto':"La estreno con el vecino extranjero que no habla mi idioma",'puntos':[1,-3,2]},
    'respuesta3':{'texto':"La llevo a objetos perdidos o a la comisaria",'puntos':[0,1,0]},
    'respuesta4':{'texto':"La ignoro y sigo andando",'puntos':[0,0,-1]},
    'respondida':false
    },
    {'id':2,'pregunta':"Acabas de ganar la lotería, ¿En qué piensas gastarte el dinero?",
    'respuesta1':{'texto':"Lo dono todo a una dudosa organización que dice ayudar a un país tercermundista",'puntos':[2,2,0]},
    'respuesta2':{'texto':"Lo gasto todo en una desenfrenada noche la cual no me acordaré de haber vivido al día siguiente",'puntos':[1,-2,0]},
    'respuesta3':{'texto':"Ahorro el dinero para el futuro",'puntos':[-2,0,0]},
    'respuesta4':{'texto':"Comparto parte del dinero con mis seres queridos y me quedo con el resto",'puntos':[-1,1,0]},
    'respondida':false
    },
    {'id':3,'pregunta':"Durante una cena en un restaurante lujoso, tu fiel amigo Eustaquio, resulta envenenado con cianuro ¿Como reaccionas?",
    'respuesta1':{'texto':"Entro en cólera y destruyo a todas las personas que me parezcas sospechosas, para vengarle",'puntos':[2,-2,3]},
    'respuesta2':{'texto':"Recuerdo mis 400 lecturas de misterios y asesinatos, e inicio una investigación para hallar al culpable",'puntos':[-2,1,1]},
    'respuesta3':{'texto':"Empiezo a llorar mientras acabo mi postre",'puntos':[2,0,-2]},
    'respuesta4':{'texto':"Llamo a la policia y le cuento lo ocurrido",'puntos':[-1,0,0]},
    'respondida':false
    },
    {'id':4,'pregunta':"Tu perro explota sin explicación. Esta muerto, Sólo queda una pierna",
    'respuesta1':{'texto':"Entierro la pierna y realizo un bonito funeral",'puntos':[-1,1,1]},
    'respuesta2':{'texto':"Lloro desconsoladamente durante horas, mientras abrazo la pierna",'puntos':[1,2,-2]},
    'respuesta3':{'texto':"Me como la pierna, hay que aprovechar todas las proteinas",'puntos':[-1,-3,0]},
    'respuesta4':{'texto':"Encuentro una solución a porque explotó tras 14 años estudiando física cuántica",'puntos':[-4,0,0]},
    'respondida':false
    },
    {'id':5,'pregunta':"Soy escorpio, mi horoscopo me advierte...",
    'respuesta1':{'texto':"'Hoy va a ser un dia con mucha suerte', asi que aprovecho y compro 100 boletos de loteria",'puntos':[3,0,0]},
    'respuesta2':{'texto':"'Eres un modelo a seguir por tu inteligencia', asi que lo uso como escusa para no estudiar para el examen",'puntos':[2,-1,0]},
    'respuesta3':{'texto':"'Ten cuidado de los tauro, te intentan engañar', Le parto las piernas a mi abuela tauro, no vaya a atreverse a hacerme algo",'puntos':[2,-2,2]},
    'respuesta4':{'texto':"No creo en el horoscopo, no leo la advertencia",'puntos':[-2,0,0]},
    'respondida':false
    },
    {'id':6,'pregunta':"Ataque nuclear a tu ciudad! Solo queda hueco para una persona más en el refugio",
    'respuesta1':{'texto':"Peleo con todos para asegurarme que la niña discapacitada entra en el refugio",'puntos':[-1,3,1]},
    'respuesta2':{'texto':"Lloro tanto que me dejan entrar por pena",'puntos':[1,-1,-2]},
    'respuesta3':{'texto':"Mato a los de dentro del refugio para que puedan entrar todos mis amigos",'puntos':[-1,-1,2]},
    'respuesta4':{'texto':"Me escondo en la nevera, en las peliculas funciona!",'puntos':[1,0,0]},
    'respondida':false
    },
    {'id':7,'pregunta':"Mientras estás en el macdonal,un niño hambriento te pide unas patatas, ¿qué haces?",
    'respuesta1':{'texto':"Voy a la caja y compro 14 bicmacs y se los doy",'puntos':[0,2,0]},
    'respuesta2':{'texto':"Le pego una paliza, verá como asi no tiene hambre",'puntos':[0,-2,1]},
    'respuesta3':{'texto':"Le doy mi targeta de credito y el código",'puntos':[2,2,0]},
    'respuesta4':{'texto':"Le doy una patata que estaba un poco quemada y tampoco la quería",'puntos':[-1,-1,0]},
    'respondida':false
    },
    {'id':8,'pregunta':"Pandemia mundial, hay que quedarse en casa para evitar el contagio",
    'respuesta1':{'texto':"Me quedo en casa y apoyo a los sanitarios por twitter",'puntos':[-1,1,0]},
    'respuesta2':{'texto':"Soy el paciente 0, me encanta comer zubat crudo",'puntos':[2,0,0]},
    'respuesta3':{'texto':"Esparzo el virus por el mundo, solo los fuertes como yo deben sobrevivir",'puntos':[0,-1,1]},
    'respuesta4':{'texto':"Pongo el himno de mi pais a todo volumen todo el tiempo para animar el vecindario",'puntos':[1,0,0]},
    'respondida':false
    },
    {'id':9,'pregunta':"Guerra mundial, soy reclutado",
    'respuesta1':{'texto':"Le hago un trabajillo algo turbio a un comandante para evitar ir al campo de batalla",'puntos':[-1,0,-1]},
    'respuesta2':{'texto':"Voy a liarme a puñetazos con un tanque",'puntos':[1,0,1]},
    'respuesta3':{'texto':"Mis multiples enfermedades cronicas y escasa salud en general me evitan ir al campo de batalla, de hecho empiezo a recibir una paga del estado para compensarlas",'puntos':[0,0,-1]},
    'respuesta4':{'texto':"Voy a regañadientes a primera linea de infanteria",'puntos':[0,0,0]},
    'respondida':false
    },
    {'id':10,'pregunta':"Hay un dinosaurio hervivoro gigante en mi jardin, ¿que hago?",
    'respuesta1':{'texto':"Lo intento domesticar, siempre se me han dado bien los animales ",'puntos':[0,1,0]},
    'respuesta2':{'texto':"Lo cazo con mi rifle de asalto, ahora su cabeza esta en mi salon",'puntos':[0,-1,1]},
    'respuesta3':{'texto':"Le ato una cuerda y lo arrastro a la reserva natural mas cercana, parece que se lleva bien con las jirafas",'puntos':[0,1,1]},
    'respuesta4':{'texto':"Wtf llamo a la policia, al zoologico y al ejercito",'puntos':[0,0,-1]},
    'respondida':false
    },
    {'id':11,'pregunta':"El team rocket secuestra a mi pikachu por quinta vez esta semana, tras encontrarlos...",
    'respuesta1':{'texto':"Esta será la última vez, les parto las piernas para que se dejen de tonterias",'puntos':[0,-1,1]},
    'respuesta2':{'texto':"Me aseguro de que vayan a prisión de verdad",'puntos':[-1,0,1]},
    'respuesta3':{'texto':"Les suelto un monologo de 50 minutos sobre el bien y el mal, parece que ahora son budistas gracias a mi",'puntos':[0,1,0]},
    'respuesta4':{'texto':"Les dejo escapar de rositas por algun motivo",'puntos':[1,0,0]},
    'respondida':false
    },
    {'id':12,'pregunta':"Veo que mi amigo mohamed trae un extraño dispositivo con luces y cables en la mochila a clase",
    'respuesta1':{'texto':"Debe ser un trabajo de ciencias, lo ignoro ya que no soy racista",'puntos':[1,1,0]},
    'respuesta2':{'texto':"Grito histerico al verlo y alerto a todo el mundo de que mohamed es terrorista",'puntos':[1,-1,-1]},
    'respuesta3':{'texto':"Lo examino en profundidad para ver de que se trata antes de tomar una decisión",'puntos':[-1,0,0]},
    'respuesta4':{'texto':"Encaro a mohamed en los baños y le hago un interrogatorio, si es una bomba debo comvencerle de que cambie de idea",'puntos':[0,1,1]},
    'respondida':false
    },
    {'id':13,'pregunta':"Me entra diarrea durante un examen...",
    'respuesta1':{'texto':"Me mantengo en el examen sufriendo, la nota que saque es la prioridad",'puntos':[-1,0,1]},
    'respuesta2':{'texto':"Aviso el profesor y le intento convencer de que me aplace el examen, dandole pena",'puntos':[-1,0,-1]},
    'respuesta3':{'texto':"Me pongo a llorar de impotencia mientras toda la clase empieza a apestarse",'puntos':[1,0,-1]},
    'respuesta4':{'texto':"Le digo al profesor que debo ir al baño y aprovecho para copiar",'puntos':[-1,-1,0]},
    'respondida':false
    },
    {'id':14,'pregunta':"Hay de comer lentejas, no me gustan las lentejas",
    'respuesta1':{'texto':"Monto un berrinche para que me den de comer otra cosa",'puntos':[1,-1,-1]},
    'respuesta2':{'texto':"Me las como aunque no me gusten, porque valoro el esfuerzo y dedicación de quien las ha cocinado",'puntos':[0,1,0]},
    'respuesta3':{'texto':"Monto un complejo sistema de acueductos para enviarle las lentejas al plato del perro sin que nadie se de cuenta",'puntos':[-1,-1,0]},
    'respuesta4':{'texto':"Establezco una alianza con mi primo quinto para que el se coma mis lentejas y yo le doy mi postre a cambio",'puntos':[-1,0,0]},
    'respondida':false
    },
  ];

  preguntaFinal= {'id':8,'pregunta':"Acabas de hacer este increible test pokemon ¿qué haces?",
  'respuesta1':{'texto':"Le doy al botón de donación del final de la pégina, y dono unos euros al paypal, para pagar los servidores",'puntos':[1,2,0]},
  'respuesta2':{'texto':"Me tocó bulbasur, rompo la pantalla del portatil y me cago en el creador del test",'puntos':[2,-1,1]},
  'respuesta3':{'texto':"Soy tieso, asi que lo comparto con mis amigos, a ver si a ellos no les toca metapod como a mi :( ",'puntos':[0,1,0]},
  'respuesta4':{'texto':"Acabo el test en silencio y prosigo mi partida de minecraft, sin compartir ni donar porque me la suda el esfuerzo del creador",'puntos':[0,-1,0]},
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
