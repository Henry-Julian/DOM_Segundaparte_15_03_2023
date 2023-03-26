let boton = document.querySelector("#btn");
let accion = () => alert("Señor usuario, Acaba de presionar el botón: Hola Mundo");
let alternar = () => boton.classList.toggle("green");

boton.addEventListener("click", accion);
boton.removeEventListener("click", accion);
boton.addEventListener("click", alternar);

