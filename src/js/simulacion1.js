const datosJSON = [
    {
        "waterLevel": 1,
        "location": "Puente 1"
    },
    {
        "waterLevel": 2,
        "location": "Puente 1"
    },
    {
        "waterLevel": 2,
        "location": "Puente 1"
    },
    {
        "waterLevel": 3,
        "location": "Puente 1"
    },
    {
        "waterLevel": 2,
        "location": "Puente 1"
    },
    {
        "waterLevel": 1,
        "location": "Puente 1"
    }
  ];


  const datosJSON2 = [
    {
        "waterLevel": 2,
        "location": "Puente 2"
    },
    {
        "waterLevel": 2,
        "location": "Puente 2"
    },
    {
        "waterLevel": 1,
        "location": "Puente 2"
    },
    {
        "waterLevel": 2,
        "location": "Puente 2"
    },
    {
        "waterLevel": 3,
        "location": "Puente 2"
    },
    {
        "waterLevel": 1,
        "location": "Puente 2"
    }
  ];
  
  let index = 0;
  let index2 = 0; // Variable para seguir el índice del JSON
  const intervalo = 20000; // 30 segundos en milisegundos





  
  function mostrarDatos() {
    const datoActual = datosJSON[index];
   
  
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1;
    let día = fechaActual.getDate();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
  
    // Asegurarse de que los valores tengan dos dígitos
    mes = mes < 10 ? '0' + mes : mes;
    día = día < 10 ? '0' + día : día;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    
  
    let fechaFormateada = `${día}-${mes}-${año}`;
    
   let horaActual = `${hora}:${minutos}`
   
  
  
  
  
    // Aquí puedes mostrar los datos en tu HTML como desees
    // Por ejemplo:
    //document.getElementById('fecha').textContent = fechaFormateada;
  
  
  
    const ubicacion = document.getElementById('horaActualizada1');
    ubicacion.innerHTML = "Ultima Actualizacion: "+horaActual;
    const nivel = document.getElementById('NivelActualizado1');
    nivel.innerHTML = "Nivel " +datoActual.waterLevel;
    const locacion = document.getElementById('lugar1');
    locacion.innerHTML = datoActual.location;
  
  
    const alerta = document.getElementById('alerta1');
                      
    if (datoActual.waterLevel === 1) {
        alerta.style.backgroundColor = "rgb(24, 206, 0)";
        alerta.style.boxShadow = " inset 0 0 20px rgba(0, 46, 210, 0.73)"
    } else if (datoActual.waterLevel === 2) {
        alerta.style.backgroundColor = "rgb(237, 170, 0)";
        alerta.style.boxShadow = "inset 0 0 20px rgb(202, 81, 0)"
    } else if (datoActual.waterLevel === 3) {
        alerta.style.backgroundColor = "rgb(243, 0, 0)";
        alerta.style.boxShadow = "inset 0 0 30px rgba(0, 0, 0, 0.829)"
        reproducirSonido();
    }
  
    // Incrementar el índice o volver al inicio si llegamos al final del JSON
    index = (index + 1) % datosJSON.length;
  }
  














  function mostrarDatos2() {
    const datoActual = datosJSON2[index];
   
  
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1;
    let día = fechaActual.getDate();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
  
    // Asegurarse de que los valores tengan dos dígitos
    mes = mes < 10 ? '0' + mes : mes;
    día = día < 10 ? '0' + día : día;
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    
  
    let fechaFormateada = `${día}-${mes}-${año}`;
    
   let horaActual = `${hora}:${minutos}`
   
  
  
  
  
    // Aquí puedes mostrar los datos en tu HTML como desees
    // Por ejemplo:
    //document.getElementById('fecha').textContent = fechaFormateada;
  
  
  
    const ubicacion = document.getElementById('horaActualizada2');
    ubicacion.innerHTML = "Ultima Actualizacion: "+horaActual;
    const nivel = document.getElementById('NivelActualizado2');
    nivel.innerHTML = "Nivel " +datoActual.waterLevel;
    const locacion = document.getElementById('lugar2');
    locacion.innerHTML = datoActual.location;
  
  
    const alerta = document.getElementById('alerta2');
                      
    if (datoActual.waterLevel === 1) {
        alerta.style.backgroundColor = "rgb(24, 206, 0)";
        alerta.style.boxShadow = " inset 0 0 20px rgba(0, 46, 210, 0.73)"
    } else if (datoActual.waterLevel === 2) {
        alerta.style.backgroundColor = "rgb(237, 170, 0)";
        alerta.style.boxShadow = "inset 0 0 20px rgb(202, 81, 0)"
    } else if (datoActual.waterLevel === 3) {
        alerta.style.backgroundColor = "rgb(243, 0, 0)";
        alerta.style.boxShadow = "inset 0 0 30px rgba(0, 0, 0, 0.829)"
        reproducirSonido();
    }
  
    // Incrementar el índice o volver al inicio si llegamos al final del JSON
    index2 = (index2 + 1) % datosJSON2.length;
  }












  // Llamar a la función inicialmente para mostrar el primer conjunto de datos
  mostrarDatos();
  mostrarDatos2();
  
  // Configurar el intervalo para cambiar los datos cada 30 segundos
  setInterval(mostrarDatos, intervalo);
  setInterval(mostrarDatos2, intervalo);
  
  

