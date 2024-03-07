let sonidoBatman = document.querySelector('#bati-encendido');
let sonidoBoton = document.querySelector('#bati-click');

let batman = document.querySelector('#batman');
let boton = document.querySelector('#bati-boton');

let estadoBatman = "apagado";

boton.addEventListener('click', () => {
    controlarBatman()
})

const controlarBatman = () => {
    if (estadoBatman == "apagado") {
        estadoBatman = "encendido";
        batman.classList.add("batman-activo");
    } else {
        estadoBatman = "apagado";
        batman.classList.remove("batman-activo");
    }
    sonidoLinterna()
}

const sonidoLinterna = () => {
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime = 0;
    }
}