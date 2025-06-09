function actualizarContador(fechaInicio, ids) {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia >= 0) {
        const segundosTotales = Math.floor(diferencia / 1000);
        const dias = Math.floor(segundosTotales / (3600 * 24));
        const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;

        document.getElementById(ids.dias).textContent = dias;
        document.getElementById(ids.horas).textContent = horas;
        document.getElementById(ids.minutos).textContent = minutos;
        document.getElementById(ids.segundos).textContent = segundos;
    } else {
        document.getElementById(ids.dias).textContent = "0";
        document.getElementById(ids.horas).textContent = "0";
        document.getElementById(ids.minutos).textContent = "0";
        document.getElementById(ids.segundos).textContent = "0";
    }
}

function iniciarContadores() {
    const fecha1 = new Date("2024-10-21T00:00:00"); // Sukuna
    const fecha2 = new Date("2025-03-10T00:00:00"); // 10 de marzo

    const ids1 = {
        dias: "dias1",
        horas: "horas1",
        minutos: "minutos1",
        segundos: "segundos1"
    };

    const ids2 = {
        dias: "dias2",
        horas: "horas2",
        minutos: "minutos2",
        segundos: "segundos2"
    };

    setInterval(() => {
        actualizarContador(fecha1, ids1);
        actualizarContador(fecha2, ids2);
    }, 1000);

    // Llamada inmediata para evitar el primer segundo vacío
    actualizarContador(fecha1, ids1);
    actualizarContador(fecha2, ids2);
}

iniciarContadores();
