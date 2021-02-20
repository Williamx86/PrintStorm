const btn_abrir = document.getElementById("menu__btn");
const btn_cerrar = document.getElementById("menu__cerrar");
const menu = document.querySelector(".capa");

btn_abrir.addEventListener('click', () => {
    menu.style.display = "flex";
});

btn_cerrar.addEventListener('click', () => {
    menu.style.display = "none";
});


var imagenes = ["url('../src/img/hombre.png')", "url('../src/img/imprenta.jpg')", "url('../src/img/stickers.jpg')"];
const slider = document.querySelector(".slider__fondo");
var indice = 0;

if (slider) {
    function cambiar_imagen(x) {
        slider.style.backgroundImage = imagenes[x];
        slider.classList.toggle("cambiar_imagen");
    };

    setInterval(
        function siguiente() {
            indice += 1;
            if (indice < imagenes.length) {
                slider.style.backgroundImage = imagenes[indice];
                slider.classList.toggle("cambiar_imagen");
            } else {
                indice = 0;
                slider.style.backgroundImage = imagenes[indice];
                slider.classList.toggle("cambiar_imagen");
            };
        }, 3100);
};