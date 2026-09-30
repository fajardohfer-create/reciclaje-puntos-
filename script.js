let puntos = 0;

function agregarPuntos(cantidad) {
    puntos += cantidad;

    document.getElementById("contador").textContent = puntos;

    if (puntos >= 500) {
        alert("🎉 ¡Felicitaciones! Has alcanzado 500 EcoPuntos.");
    } else if (puntos >= 250) {
        alert("🌱 ¡Muy bien! Ya tienes 250 EcoPuntos.");
    } else if (puntos >= 100) {
        alert("♻️ ¡Genial! Has alcanzado 100 EcoPuntos.");
    }
}