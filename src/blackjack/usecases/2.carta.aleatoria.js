

import _ from 'underscore';

export const pedirPosiconRandom = (mazo) => {
    
    // console.log(mazo)
    if( mazo.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    let aleatorio = _.random( 0, mazo.length-1 );
    let buscasCarta = mazo[aleatorio]

    return mazo.splice(aleatorio,1);
}