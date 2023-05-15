
import _ from 'underscore';

const valorCarta = (carta) => {
    let cartaJoin = carta.join();
    let valor = cartaJoin.substring(0, cartaJoin.length - 1);

    let valorAS = [1,11]
    let as      = 0
    while (valor === 'A' && !valorAS.includes(as) ) {
        as = Number(prompt("Elige un valor: 1 o 11 ", 11))
    }

    return ( isNaN (valor) ) 
                ? ( valor === 'A' ) 
                    // ? parseInt( prompt("Elega Valor: 1 o 11 ", 11) ) 
                    ? as
                    : 10
                : Number(valor);           
    }
const valorCartaComputadora = (carta) => {
    let cartaJoin = carta.join();
    let valor = cartaJoin.substring(0, cartaJoin.length - 1);
    let cartaAS = [1,11];
    let aleatorio = _.random(0, cartaAS.length-1)

    return ( isNaN (valor) ) 
                ? ( valor === 'A' ) 
                    ? parseInt( cartaAS[aleatorio] ) 
                    : 10
                : Number(valor);           
}

export{
    valorCarta,
    valorCartaComputadora,
}