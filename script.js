//alert("Hola Te invito a ver mi Página Web");

/*let nombre="Marta"; // el valor se uede modificar

var nombre1= "Yumira";
const nombre2="Joel";// Es una constante el valor no se uede modificar

console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/

//SELECCIONAR ELEMENTOS

/*let contenidoTitulo = "holas";
let titulo = document.querySelector(" .log .fa-solid");
console.log(titulo);
titulo.innerHTML=contenidoTitulo;

//CONDICIONALES
let  textoTitulo = titulo.innerHTML;
console.log(textoTitulo);

if(textoTitulo == "hola"){
    titulo.innerHTML="otro";
}else{
    console.log("No se cumple")
}*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});