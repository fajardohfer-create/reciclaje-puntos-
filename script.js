let puntos = Number(localStorage.getItem("puntos")) || 0;

const datosGuardados = JSON.parse(
    localStorage.getItem("usuario")
);


/* AL CARGAR LA PÁGINA */

document.addEventListener("DOMContentLoaded", function () {

    if (datosGuardados) {

        mostrarPagina();

    }

});


/* FORMULARIO */

document
    .getElementById("formulario")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value.trim();

        const curso =
            document.getElementById("curso").value.trim();

        const correo =
            document.getElementById("correo").value.trim();


        const usuario = {
            nombre: nombre,
            curso: curso,
            correo: correo
        };


        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );


        mostrarPagina();

    });


/* MOSTRAR PÁGINA */

function mostrarPagina() {

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if (!usuario) {
        return;
    }


    document
        .getElementById("registro")
        .classList.add("oculto");


    document
        .getElementById("contenido")
        .classList.remove("oculto");


    document
        .getElementById("nombreUsuario")
        .textContent = usuario.nombre;


    document
        .getElementById("mostrarNombre")
        .textContent = usuario.nombre;


    document
        .getElementById("mostrarCurso")
        .textContent = usuario.curso;


    document
        .getElementById("mostrarCorreo")
        .textContent = usuario.correo;


    actualizarPuntos();

}


/* AGREGAR PUNTOS */

function agregarPuntos(cantidad) {

    puntos += cantidad;

    localStorage.setItem(
        "puntos",
        puntos
    );

    actualizarPuntos();


    if (puntos === 100) {

        alert(
            "🎉 ¡Felicitaciones! Alcanzaste 100 EcoPuntos."
        );

    }

    if (puntos === 250) {

        alert(
            "🌱 ¡Excelente! Alcanzaste 250 EcoPuntos."
        );

    }

    if (puntos === 500) {

        alert(
            "🏆 ¡Increíble! Alcanzaste 500 EcoPuntos."
        );

    }

}


/* ACTUALIZAR CONTADOR */

function actualizarPuntos() {

    document
        .getElementById("contador")
        .textContent = puntos;

}