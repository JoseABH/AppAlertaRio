

function reproducirSonido() {
    var audio = document.getElementById("alertSound");
    audio.play();
    
    let APR = document.getElementById("contenedorAlerta");
    APR.style.top = "0";
    regresiva();
    let cabeza = document.querySelector("header");
    cabeza.style.backgroundColor = "#b30000 ";
    let conte2 = document.querySelector("#contenedor2");
    conte2.style.backgroundColor= "#b30000 ";

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
    

    const duracion = 60;

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
        salir();
       
      } else {
        tiempoRestante--;
      }
    }

    // Actualizar el contador inicialmente
    actualizarContador();

    // Actualizar el contador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);

    
}

 // Imprime el contenido de 'horaActualizada2'






























// // Obtiene la URL completa del documento actual
 const url = window.location.href;

// // Divide la URL en una matriz
 const pathname = url.split('/');

// // Verifica si el HTML actual es el que queremos
if (pathname[pathname.length - 1] === 'historial.html' || 'historialalerta.html') {




    //========================== Inicio para busqueda de la tabla de historial ==========================
    function buscar() {
        const input = document.querySelector('#texbus').value.toLowerCase().replace(/\s+/g, '');
        const rows = document.querySelectorAll('tbody tr');
        let totalFilasMostradas = 0; // Variable para llevar el total de filas mostradas

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
                totalFilasMostradas++; // Incrementa el contador de filas mostradas
            } else {
                row.style.display = 'none';
            }
        });

        // Actualiza el total de filas mostradas
        document.getElementById("total-filas").textContent = totalFilasMostradas;
    }

    //========================== Inicio para busqueda de la tabla de historial ==========================
    if (pathname[pathname.length - 1] === 'historial.html') {
        fetch('https://api-rest-river-date-dev-bmke.4.us-1.fl0.io/data')
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
    }




    if (pathname[pathname.length - 1] === 'historialalerta.html') {

        fetch('https://api-rest-river-date-dev-bmke.4.us-1.fl0.io/data?waterLevel=3')
            .then(response => response.json())
            .then(data => {
                const html = data.map(item => {
                    let waterLevelEmoji = '';
                    if (item.waterLevel === 3) {
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



    }






    //========================== Final para llenar la tabla de historial ==========================
}

if (pathname[pathname.length - 1] === '-Principal.html' || pathname[pathname.length - 1] === '-Principal.html#') {

    async function fetchDataAndDisplay() {
        try {
            // Hacer la solicitud a la API
            const respuesta = await fetch('https://api-rest-river-date-dev-bmke.4.us-1.fl0.io/data');
            const data = await respuesta.json();
            
            // Filtrar y encontrar los datos más recientes de cada ubicación
            const locations = ['Londres, Reino Unido', 'São Paulo, Brasil'];
            const latestEntries = [];
           

            locations.forEach(location => {
                const filteredData = data.filter(item => item.location === location);
                if (filteredData.length > 0) {
                    const latestEntry = filteredData.reduce((prev, current) => {
                        return (new Date(current.date) > new Date(prev.date)) ? current : prev;
                    });
                    latestEntries.push(latestEntry);
                }
               

            }); 

            // Encontrar el dato con el nivel de agua más alto
            const highestWaterLevelEntry = latestEntries.reduce((prev, current) => {
                return current.waterLevel > prev.waterLevel ? current : prev;
            });

            // Mostrar los datos en la página HTML
            
                    const locacion = document.getElementById('lugar');
                    locacion.innerHTML = highestWaterLevelEntry.location;
            
                    const nivel = document.getElementById('NivelActualizado');
                    nivel.innerHTML = "Nivel " + highestWaterLevelEntry.waterLevel;
                    
                    const alerta = document.getElementById('alerta');
                    
                    if (highestWaterLevelEntry.waterLevel === 1) {
                        alerta.style.backgroundColor = "rgb(24, 206, 0)";
                        alerta.style.boxShadow = " inset 0 0 20px rgba(0, 46, 210, 0.73)"
                    } else if (highestWaterLevelEntry.waterLevel === 2) {
                        alerta.style.backgroundColor = "rgb(237, 170, 0)";
                        alerta.style.boxShadow = "inset 0 0 20px rgb(202, 81, 0)"
                    } else if (highestWaterLevelEntry.waterLevel === 3) {
                        alerta.style.backgroundColor = "rgb(243, 0, 0)";
                        alerta.style.boxShadow = "inset 0 0 30px rgba(0, 0, 0, 0.829)"
                    }
                    
            
                    const ubicacion = document.getElementById('horaActualizada');
                    ubicacion.innerHTML = "Ultima Actualizacion: "+highestWaterLevelEntry.time;


        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
       
    }

    // Llamar a la función inicialmente
    fetchDataAndDisplay();

    // Actualizar la función cada 5 segundos
    setInterval(fetchDataAndDisplay, 5000);






// async function fetchDataByLocationAndDate() {
//     try {
//         // Hacer la solicitud a la API
//         const response = await fetch('https://back-pzj5-dev.fl0.io/data');
//         const data = await response.json();


//         // Filtrar los datos por ubicación
//         const location = 'São Paulo, Brasil';
//         const filteredData = data.filter(item => item.location === location);

//         // Encontrar la fecha más reciente
//         const latestEntry = filteredData.reduce((prev, current) => {
//             return (new Date(current.date) > new Date(prev.date)) ? current : prev;
//         });

//         // Mostrar los datos en la página HTML
//         const locacion = document.getElementById('lugar');
//         locacion.innerHTML = latestEntry.location;

//         const nivel = document.getElementById('NivelActualizado');
//         nivel.innerHTML = "Nivel " + latestEntry.waterLevel;
        
//         const alerta = document.getElementById('alerta');
        
//         if (latestEntry.waterLevel === 1) {
//             alerta.style.backgroundColor = "rgb(24, 206, 0)";
//         } else if (latestEntry.waterLevel === 2) {
//             alerta.style.backgroundColor = "rgb(237, 170, 0)";
//         } else if (latestEntry.waterLevel === 3) {
//             alerta.style.backgroundColor = "rgb(243, 0, 0)";
//         }
        

//         const ubicacion = document.getElementById('horaActualizada');
//         ubicacion.innerHTML = "Ultima Actualizacion: "+latestEntry.time;


//     } catch (error) {
//         console.error('Error al obtener los datos:', error);
//     }
// }

// // Llamar a la función inicialmente
// fetchDataByLocationAndDate();

// // Actualizar la función cada 5 segundos
// setInterval(fetchDataByLocationAndDate, 5000); // 5000 milisegundos = 5 segundos

}




















// const respuesta1 = await fetch('https://back-pzj5-dev.fl0.io/data?location=S%C3%A3o%20Paulo,%20Brasil');
//             const data = await respuesta1.json();

