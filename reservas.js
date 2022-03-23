let contenedor = document.getElementById("contenedor");
let envBoton = document.getElementById("boton");

contenedor.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("w-100")) {
        evento.target.src="img/rojo.png";
    }
})

envBoton.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault();
    let pelicula = document.getElementById("pelicula").value;
    let cantidad = document.getElementById("cantidad").value;
    let asiento = document.getElementById("asiento").value;
    let boleta = 0
    if (asiento == "General") {
         boleta = 9000
    } else {
         boleta = 12000
    }

    let cantTotal = boleta * cantidad;

    console.log("Bienvenido a nuestra seleccion de peliculas CineColombia");
    console.log("La pelicula que escogiste es: " + pelicula);
    console.log("la cantidad de boletas escogidas es de " + cantidad + " boletas");
    console.log("El tipo de asiento que escogío es el asiento " + asiento);
    alert("El precio total es de " + cantTotal + " pesos")
}
