function actualizarContador(idPrefix, fechaInicio) {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia >= 0) {
        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;

        document.getElementById(`${idPrefix}dias`).textContent = dias;
        document.getElementById(`${idPrefix}horas`).textContent = horas;
        document.getElementById(`${idPrefix}minutos`).textContent = minutos;
        document.getElementById(`${idPrefix}segundos`).textContent = segundos;
    } else {
        document.getElementById(`${idPrefix}contador`).textContent = "La fecha aún no ha llegado.";
    }
}

// Definir las fechas
const fechaPrimeraVez = new Date("2024-10-21T00:00:00");
const fechaMarzo = new Date("2025-03-10T00:00:00");

// Llamar y actualizar ambos contadores
setInterval(() => {
    actualizarContador("", fechaMarzo);      // Para 10 de marzo de 2025
    actualizarContador("1", fechaPrimeraVez); // Para 21 de octubre de 2024
}, 1000);

// Llamada inicial
actualizarContador("", fechaMarzo);
actualizarContador("1", fechaPrimeraVez);

