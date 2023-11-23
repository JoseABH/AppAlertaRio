function Alert(titleAlerta1,colorT,TamT,parrafoAlerta2,colorP,TamP,BtnText,BtnColor,BtnTam){
    let Alert = document.getElementById("alerta");
    let titleAlerta = document.getElementById("titleAlerta");
    let parrafoAlerta = document.getElementById("parrafoAlerta");
    let Alertabtn = document.getElementById("Alertabtn");
    titleAlerta.innerHTML = titleAlerta1
    parrafoAlerta.innerHTML = parrafoAlerta2
    Alertabtn.innerHTML = BtnText

    if (Alert.style.transform === "" || Alert.style.transform === "translateY(-1100px)") {
        Alert.style.transform = "translateY(0px)";
        titleAlerta.style.color = colorT;
        titleAlerta.style.fontSize = TamT;
        parrafoAlerta.style.color = colorP;
        parrafoAlerta.style.fontSize = TamP;
        Alertabtn.style.color = BtnColor; 
        Alertabtn.style.fontSize = BtnTam;
    } else {
        Alert.style.transform = "translateY(-1100px)"
    }
}
  


function inicio() {
    let contrasena = document.getElementById("Contraseña");
    let contraseña = contrasena.value;

    fetch("src/js/login.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (usuariosJSON) {
            var usuarioValido = false;
            let nombre;

            for (var i = 0; i < usuariosJSON.length; i++) {
                if (usuariosJSON[i].cedula === contraseña) {
                    usuarioValido = true;
                    nombre = usuariosJSON[i].nombre;
                    break; // Si se encuentra una coincidencia, salir del bucle
                }
            }

            if (usuarioValido) {
                
                document.getElementById("Contraseña").value = '';
                document.getElementById("Contraseña").style.border = "3px solid rgb(0, 136, 255)";

                
                Alert("Hola " + nombre +'<i class="bi bi-person-fill-check"></i>',"#0086E7","1.5rem","Bienvenido, Aplicacion de alerta de Desbordamiento del Rio. Creado por: Gryffindor","#00152e","1.2rem","Cerrar","#8b1a00","1rem");
                let louder = document.getElementById("louder").style.display = "block";
                let Contenido = document.getElementById("Contenido");
                Contenido.style.pointerEvents = "none";
                Contenido.style.opacity = "30%";
                let contenedor22 = document.getElementById("contenedor22");
                contenedor22.style.pointerEvents = "none";
                contenedor22.style.opacity = "30%";

                setTimeout(function () {
                    window.location.href = "Principal.html";
                }, 7000);
                louder.style.display = "node";
            } else if (contraseña === "") {
                Alert("Introduzca la contraseña"+'<i class="bi bi-person-fill-exclamation"></i>',"#cc0000","1.5rem","Se requiere la contraseña","#00152e","1.2rem","Cerrar","#8b1a00","1rem");
            

                document.getElementById("Contraseña").style.border = "3px solid red";
            } else {
                Alert("Contraseña incorrecta "+'<i class="bi bi-person-fill-x"></i>',"#cc0000","1.5rem","Credenciales no registradas","#00152e","1.2rem","Cerrar","#8b1a00","1rem");
                document.getElementById("Contraseña").style.border = "3px solid red";
                document.getElementById("Contraseña").value = '';
            }
        })
       
}

function menu(){
    let menu = document.getElementById("menucuerpo");
    if(menu.style.left === "" || menu.style.left === "-110vw"){
        menu.style.left = "0vw";
    }else{
        menu.style.left = "-110vw";
    }
}




