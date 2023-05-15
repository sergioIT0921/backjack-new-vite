

const disabledBtnPedirDetener = () => {
    btnPedir.disabled = true
    btnPedir.style.backgroundColor = "rgba(70, 131, 180, 0.5)"
    btnDetener.disabled = true
    btnDetener.style.backgroundColor = "rgba(70, 131, 180, 0.5)"
}
const disabledBtnPedir = () => {
    btnPedir.disabled = true
    btnPedir.style.backgroundColor = "rgba(70, 131, 180, 0.5)"
}
const activeBtnPedir = () => {
    btnPedir.disabled = false;
    btnPedir.style.backgroundColor = "steelblue"
}
const disabledBtnNuevo = () => {
    btnNuevo.disabled = true;
    btnNuevo.style.backgroundColor = "rgba(0,0,0,1)";
}
const activeBtnPedirDetener = () => {
    btnPedir.disabled = false;
    btnPedir.style.backgroundColor = "steelblue"
    btnDetener.disabled = false;
    btnDetener.style.backgroundColor = "slateblue"
}
const activeBtnNuevo = () => {
    btnNuevo.disabled = false;
    btnNuevo.style.backgroundColor = "crimson";
}

export{
    disabledBtnPedirDetener,
    disabledBtnPedir,
    activeBtnPedir,
    disabledBtnNuevo,
    activeBtnPedirDetener,
    activeBtnNuevo,
    
}

