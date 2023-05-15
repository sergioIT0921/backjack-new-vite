

export const crearJugadoresHTML = (cantidad, jugador) => { 
            
        for( let i in cantidad){
            let div = document.createElement('DIV');
            let html = `
                    <article class="jugador__container">
                            <h1 class="jugador__nombre" id="usuario">
                                Jugador ${Number(i)+1} - <small> 0 </small>
                            </h1>
                            <div class="jugador__cartas" >
                                <figure class="jugador__picture" id="usuario-cartas">  </figure>
                            </div>
                    </article>
                `;
            
            div.innerHTML += html;
            jugador.appendChild(div.firstElementChild);
            }
            let h1 = jugador.lastChild.querySelector('h1'); // seleccionamos el ultimo
                h1.innerHTML = `
                    Computadora ${cantidad.length} - <small> 0 </small>
                    `
} 