
function reproducirSonido() {
    var audio = document.getElementById("alertSound");
    audio.play();
    
    let APR = document.getElementById("contenedorAlerta");
    APR.style.top = "0";
    regresiva();
}

function salir() {
    var audio = document.getElementById("alertSound");
    audio.pause();  // Pausa la reproducción actual
    audio.currentTime = 0;  // Vuelve al inicio del audio (opcional)
    let APR = document.getElementById("contenedorAlerta");
    APR.style.top = "-110vh";
    tiempoRestante=0
  }
  let tiempoRestante= 0

// Establece la fecha objetivo para la cuenta regresiva (puedes cambiarla a la fecha que desees)
function regresiva() {
    

    const duracion = 120;

    // Obtener el elemento HTML donde mostraremos el contador
    const contadorElemento = document.getElementById("cuentaRegresiva");

    // Inicializar el contador
    tiempoRestante = duracion;

    // Función para actualizar el contador y mostrarlo en la página
    function actualizarContador() {
      const minutos = Math.floor(tiempoRestante / 60);
      const segundos = tiempoRestante % 60;
      contadorElemento.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
      
      // Verificar si el contador ha llegado a cero
      if (tiempoRestante === 0) {
        clearInterval(intervalo); // Detener la cuenta regresiva
       
      } else {
        tiempoRestante--;
      }
    }

    // Actualizar el contador inicialmente
    actualizarContador();

    // Actualizar el contador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);

    
}



  
//========================== Inicio para busqueda de la tabla de historial ==========================
function buscar() {
    const input = document.querySelector('#texbus').value.toLowerCase().replace(/\s+/g, '');
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        let encontrado = false;

        row.querySelectorAll('td').forEach(cell => {
            const contenido = cell.textContent.toLowerCase().replace(/\s+/g, '');
            if (contenido.includes(input)) {
                encontrado = true;
            }
        });

        if (encontrado) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
//========================== Inicio para busqueda de la tabla de historial ==========================

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        const html = data.map(item => {
            let waterLevelEmoji = '';
            if (item.waterLevel === 1) {
                waterLevelEmoji = 'Nivel 1 🟢'; // Nivel 1: Verde
            } else if (item.waterLevel === 2) {
                waterLevelEmoji = 'Nivel 2 🟡'; // Nivel 2: Amarillo
            } else if (item.waterLevel === 3) {
                waterLevelEmoji = 'Nivel 3 🔴'; // Nivel 3: Rojo
            }
            return `
                <tr>
                    <td>${item.date}</td>
                    <td>${item.time}</td>
                    <td>${waterLevelEmoji}</td>
                    <td>${item.location}</td>
                </tr>
            `;
        }).join('');

        document.querySelector('tbody').innerHTML = html;
    });
//========================== Final para llenar la tabla de historial ==========================
