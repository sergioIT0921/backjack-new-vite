


export const validarPuntajes = (jugadores) => {     
    for( let punto in jugadores ){
        if( punto == jugadores.length-1 ){
            console.log( `Computadora: ${Number(punto)+1} - Puntos: ${jugadores[punto]}` )
        }else{
            console.log( `Jugador: ${Number(punto)+1} - Puntos: ${jugadores[punto]}` )
        }
    }
}