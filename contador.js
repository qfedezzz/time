actualizarContador() {
    const fechaInicio = new Date("2025-03-10T00:00:00");
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia >= 0) {
        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    } else {
        document.getElementById("contador").textContent = "La fecha aún no ha llegado.";
    }
}
