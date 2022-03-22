let contenedor = document.getElementById("contenedor");
let bandera = true

contenedor.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("w-100")) {
        evento.target.src="img/rojo.png";
        bandera = false;
    }
})