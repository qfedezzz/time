function actualizarContador(id, fechaInicio) {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia >= 0) {
        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;

        document.getElementById(`dias${id}`).textContent = dias;
        document.getElementById(`horas${id}`).textContent = horas;
        document.getElementById(`minutos${id}`).textContent = minutos;
        document.getElementById(`segundos${id}`).textContent = segundos;
    } else {
        document.getElementById(`contador${id}`).textContent = "La fecha aún no ha llegado.";
    }
}

const fechaPrimeraVez = new Date("2024-10-21T00:00:00");
const fechaMarzo = new Date("2025-03-10T00:00:00");

// Actualizar ambos contadores cada segundo
setInterval(() => {
    actualizarContador(1, fechaPrimeraVez);
    actualizarContador(2, fechaMarzo);
}, 1000);

// Llamada inicial para que no espere un segundo
actualizarContador(1, fechaPrimeraVez);
actualizarContador(2, fechaMarzo);
