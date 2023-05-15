

export const maximoPuntaje = ( jugadores ) => {  
    
    let max = 0

    for(let i = 0; i < jugadores.length-1; i++ ){
        if( jugadores[i] <= 21 && max <= jugadores[i]) {
            max = jugadores[i]
            continue
        }else{
            continue
        }
    }
    return max;
}