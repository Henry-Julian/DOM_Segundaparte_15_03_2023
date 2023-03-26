let boton = document.querySelector("#btn");
let eventManager = {
    handleEvent: function(event) {
        if (event.type == "click") {
            alert("Señor Usuario, Usted acaba de presionar el botón: Hola Mundo");
        } else if (event.type == "mouseleave") {
            alert("Señor Usuario, usted acaba de abandonar el botón");
        }
    }
}

boton.addEventListener("click",eventManager);
boton.addEventListener("mouseleave",eventManager);
