
    
   import { imprimirCarta, valorCarta, valorCartaComputadora, pedirPosiconRandom, crearDeck, setCounter, crearJugadoresHTML, disabledBtnPedirDetener, disabledBtnPedir, activeBtnPedir, disabledBtnNuevo, activeBtnPedirDetener, activeBtnNuevo, validarPuntajes, maximoPuntaje} from './usecases'
        

  'use stric'

    console.log("Presione NUEVO para empezar...")
      
        // las VARIABLES tipo "REFERENCIA" para hacer llamaos el DOM. es buena practica que se hagan al comienzo del codigo, asi cuando las usamos solo es la modificacion las referencias.    
          // variables de Cartas
                let deck         = []
                const tipos      = ['C','D','H','S'],
                    especiales = ['A','J','K','Q']; 
          // variables para llamar al HTML y Eventos
                const btnNuevo   = document.querySelector('#btnNuevo'),
                    btnPedir   = document.querySelector('#btnPedir'),
                    btnDetener = document.querySelector('#btnDetener');
                  // console.log(btnNuevo ,btnPedir, btnDetener)
          // variables a los puntos de jugador y computadora
                let puntosJugadores   = []; // Array de jugadores(ultima posicion en la Computadora)
                let puntosHTML; // seleccion del HTML a <small>
          // variables a la imagenes de jugador usuario y computadora
                export  let usuarioCartas; // seleccion del HTML para mostrar las cartas
                export let jugador = document.querySelector('.jugador'); //contenedor de cada jugador
                let counter = 0 // conteo de jugadores
                let max; // puntaje del jugador mas alto
              
        // Inicializar JUEGO
            const inicializarJuego = () => { 
                deck = crearDeck( tipos, especiales ); 
            }
            const validarJugadores = (numero = 2) => {
                let cantidad = Number(prompt("Ingrese Cantidad de Jugadores(Min:2 - Max:4): ", numero))
                while (cantidad < 2 || cantidad > 4 || isNaN(cantidad)) {
                    cantidad = Number(prompt("Ingrese Cantidad de Jugadores (Min:2 - Max:4): ", numero))
                }
                for( let i = 0; i < cantidad; i++ ){
                    puntosJugadores.push(0); // se agregan cantidad de jugadores   
                }
                crearJugadoresHTML(puntosJugadores, jugador);

                puntosHTML  = document.querySelectorAll('.jugador__container h1 small');
                usuarioCartas = document.querySelectorAll('#usuario-cartas')
                    // console.log(puntosHTML)
                    // console.log(usuarioCartas)
                    // console.log(jugador.children)
            }
        // -> funcion crearJugadoresHTML 
        // -> funcion para crear baraja de cartas mescladas(con Libreria)
        // -> funcion para Solicitar 1 carta Aleatoria de la baraja Nro de posicon
        // -> funcion para indicar el VALOR DE CARTA. ( jugador y computadora)
        // -> funcion COUNTER de jugadores para evento DETENER asi pasa al siguiente jugador
        // -> npm run devFuncion para Mostrar Cartas dinamicas a Jugadores y Computadora
            
        // Funcion para sumar los Puntos de los Jugadores y la computadora
            const acumularPuntos = ( turno, carta ) => {  
                puntosHTML  = document.querySelectorAll('.jugador__container h1 small');              
                if( turno == puntosJugadores.length - 1 ){
                    puntosJugadores[turno] = puntosJugadores[turno] + valorCartaComputadora(carta);
                }else {
                    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
                }
                puntosHTML[turno].innerHTML = puntosJugadores[turno];

                return puntosJugadores[turno] ;
            }
        // Funcion para determianr el Ganador o Empate
            const determinarGanador = (computadora, jugador) => {
                let buscarJugadorPtos = puntosJugadores.findIndex(pto => pto == jugador)
                setTimeout ( () => {
                    if( (computadora === 21) && (jugador === 21) ){
                        // console.log("%c EMPATE 21 : ", "color:yellow");//ok
                        alert("EMPATE 21");//ok
                    }else if( (computadora === 21) && (jugador != 21) ){
                        // console.log( "%c GANO LA COMPUTADORA - BlackJACK : ", "color:blue" );//ok
                        alert( "GANO LA COMPUTADORA - BlackJACK : ");//ok
                    }else if( (jugador === 21) && (computadora != 21) ){
                        // console.log( "%c GANO EL JUGADOR - BlackJACK : ", "color:blue", buscarJugadorPtos+1 );//ok
                        alert( `GANO EL JUGADOR: ${buscarJugadorPtos+1} - BlackJACK` );//ok
                    }else if( jugador === 0 ){
                        // console.log("%c GANO LA COMPUTADORA : ", "color:red");//ok
                        alert("GANO LA COMPUTADORA : ");//ok
                    }else if( computadora > 21 ){
                        // console.log( "%c GANO EL JUGADOR NRO : ", "color:red", buscarJugadorPtos+1 );//ok
                        alert( `GANO EL JUGADOR NRO : ${buscarJugadorPtos+1}` );//ok
                    }else if( jugador < computadora ){
                        // console.log( "%c GANO LA COMPUTADORA : ", "color:red" );//ok
                        alert( "GANO LA COMPUTADORA : ");//ok
                    }
                    validarPuntajes(puntosJugadores)
                },1500 );
            }

        // TURNO DE LA COMPUTADORA:
            const juegaComputadora = (nroJugador) => {
                let ptosMaxJugador = maximoPuntaje(puntosJugadores); // puntos maximo de 1 jugador
                
                let ptsComputadora = 0;
                do {
                    // console.log( deck );//  imprime por cada vex que pide carta
                    let carta = pedirPosiconRandom(deck);
                    ptsComputadora = acumularPuntos( puntosJugadores.length-1, carta)
                    
                    let valorCarta = valorCartaComputadora(carta);

                    // imprimir Carta
                        imprimirCarta(carta, nroJugador);
                        
                    if( ptosMaxJugador == 0 ) break;             
                        
                    } while ( (ptsComputadora <= ptosMaxJugador) && (ptosMaxJugador <= 21) );
                        console.log({ptsComputadora, ptosMaxJugador})


                // validacion por intervalo de TIEMPO
                    determinarGanador( ptsComputadora, ptosMaxJugador )
            }
        // TURNO DE LOS JUGADORES:
            const juegaJugador = (numJugador) => {
                if( numJugador == puntosJugadores.length-1 ){
                    // console.log({numJugador})
                    juegaComputadora(numJugador);
                };

                let pedirEliminarCarta = pedirPosiconRandom(deck) 
                puntosJugadores[numJugador] = acumularPuntos( numJugador, pedirEliminarCarta )

                // imprimir carta
                    imprimirCarta(pedirEliminarCarta, numJugador)

                if( puntosJugadores[numJugador] >= 21 ) disabledBtnPedir()
            }
        // Funcion para Habilitar y deshabilitar
        // fUNCION PARA RESETEAR el juego
            const resetJuego = () => {
                console.clear()
                puntosJugadores = [];
                puntosHTML = 0;
                jugador.innerHTML = "";
                counter = 0;
                max = 0;
                console.log("A JUGAR...")
            }

        // Funcion validar Puntaje
        // Funcion para inidcar el maximo puntaje del jugador a la computadora

        // EVENTOS:
            btnNuevo.addEventListener('click', () => {
                let numero = 2
                resetJuego()
                inicializarJuego();
                validarJugadores(numero, puntosJugadores, puntosHTML, usuarioCartas, jugador)
                disabledBtnNuevo();
                activeBtnPedirDetener();
                console.log("Listo para jugar")
            } )
            btnPedir.addEventListener('click', () => {
                juegaJugador(counter)
                //console.log(deck)
            } ) 
            btnDetener.addEventListener('click', () => {
                    counter = counter + 1
                        if( counter < puntosJugadores.length-1 ){
                            inicializarJuego() 
                            activeBtnPedir()    
                            setCounter(counter)
                        }
                        if(counter == puntosJugadores.length-1) {          
                            juegaComputadora(counter)
                            disabledBtnPedirDetener()
                            setTimeout( () =>{
                                activeBtnNuevo()
                            } , 1000 )
                        }
            } )                    
    // CARGANDO JUEGO:
        disabledBtnPedirDetener()

