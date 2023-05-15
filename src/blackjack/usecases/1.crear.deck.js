import _ from 'underscore';
    /* Descripcion de CARTAS (Deck)
        -> C = Clubs    - Trebol
        -> D = Diaminds - Diamante
        -> H = Hearts   - Corazon
        -> S = Spades   - Espadas

        Regla:
            - Los valores que toman las cartas son los siguientes: 
            --> de la carta dos(2) hasta la carta diez(10), el valor de la carta es su propio número. 
            --> Las figuras valen diez(10). 
            --> Los Ases (A) pueden valer uno(1) u once(11) y será el jugador quien decida qué valor toman los Ases en cada momento de la partida. en la parte de la computadora se hacer un random aleatorio
    */
/**
 * Funcion para crear baraja de cartas mescladas(con Libreria)
 * @param {Array<string>} tiposCartas Ejemplo ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','K','Q']
 * @returns {Array<string>} Retorna un Nuevo Deck de cartas Mezcladas. Ejemplo [''8H', 'KD', 'AS', '7S', '4C', '3S', '7H', '10C', '8S', 'JD', 'KS', '5S', '5H', '9H', '3H', '2C', 'QD', '6D', 'QS', 'KH', '3D', '8D', '3C', 'JC', 'AC', '9C', '5C', 'AH', 'QC', '4H', '10D', '7C', 'JS', '4D', '7D', '2S', '10S', '9D', '4S', '2H', 'QH', '2D', 'KC', '6S', '6H', 'JH', '8C', '5D', 'AD', '6C', '9S', '10H']
 */
    export const crearDeck = ( tiposCartas, tiposEspeciales ) => {

        if( !tiposCartas || tiposCartas.length === 0 )
            throw new Error('Tipos de Carta es Obligatorio como un Array de String')
        if( !tiposEspeciales || tiposEspeciales.length === 0 )
            throw new Error('Tipos Especiales es Obligatorio como un Array de String')

        let deck = []; // DECK VACIO

        for( let i=2; i<=10; i++ ){
            for( let tipo of tiposCartas ){
                deck.push(i + tipo)
            }
        }
        for( let tipo of tiposCartas ){
            for( let especial of tiposEspeciales ){
                deck.push(especial + tipo)
            }
        }

        deck =  _.shuffle(deck); // retorna el DECK MESCLADO
            // console.log(deck)
        return deck;
    }