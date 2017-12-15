// Variables: cámbialas por los id y clase correspondiente

// ID del enlace que despliega el menú
var callNav = "#nav-link";

// ID del menú que será desplegado
var openNav = "#nav";

// Clase (sin punto) que muestra el menú
var viewNav = "nav-open";

// Declaramos las funciones
function nav(){
  var call = document.querySelector(callNav);
  call.addEventListener("click", openNavegation, false);
}

function openNavegation(e) {
  e.preventDefault();
  var open = document.querySelector(openNav);
  open.classList.toggle(viewNav);
}

// Agregamos la clase .js a la etiqueta html para saber que JS está funcionando
document.querySelector("html").classList.add("js");

// Ejecutamos la función principal
nav();

// Smooth scroll
$("a:not(#nav-link)").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash;
    });
  }
});
