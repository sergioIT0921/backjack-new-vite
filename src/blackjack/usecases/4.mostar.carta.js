
import { usuarioCartas } from "..";

export const imprimirCarta = ( carta, numJugador) => {

    const imgCarta = document.createElement('IMG');
            imgCarta.classList.add('jugador__img')
            imgCarta.src = `assets/cartas/${carta}.png`;
        usuarioCartas[numJugador].append( imgCarta );
        
}