// Animacion de encabezado sticky
const stickyElm = document.querySelector('header.sticky');

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm);


/* # Animacion de links seguimiento de usuario # */
//calculamos el porcentaje de cada seccion en el total de la pantalla
//var percentSection1 = body *

//Determinamos las variables de scroll
var x = window.scrollX, y = window.scrollY;

function activeLink() {
  $("a.navbar-link").each(function() {
      if (this.href == window.location.href) {
          $(this).addClass("active");
      }
      if (this.href !== window.location.href) {
          $(this).removeClass("active");
      }

  })
}

$(document).ready(activeLink);
$(window).scroll(activeLink);



// //Tomamos la altura del body completo
// let body = document.querySelector('body');
// let heightBody = body.offsetHeight;
//
// //Tomamos la altura de cada seccion
// let section1 = document.querySelector('#section1');
// let heightSection1 = section1.offsetHeight;
//
// let section2 = document.querySelector('#section2');
// let heightSection2 = section2.offsetHeight;
//
// let section3 = document.querySelector('#section3');
// let heightSection3 = section3.offsetHeight;
//
// let section4 = document.querySelector('#section4');
// let heightSection4 = section4.offsetHeight;
//
//
//
// console.log("La altura del body es " + heightBody + "px");
// console.log("La altura de la seccion 1 es " + heightSection1 + "px");
// console.log("La altura de la seccion 2 es " + heightSection2 + "px");
// console.log("La altura de la seccion 3 es " + heightSection3 + "px");
// console.log("La altura de la seccion 4 es " + heightSection4 + "px");



//Tomamos la altura del body completo
let body = document.querySelector('body');
let heightBody = body.offsetHeight;

//Tomamos la altura de cada seccion
let section1 = document.querySelector('#section1');
// let heightSection1 = section1.offsetHeight;

let section2 = document.querySelector('#sobremi');
// let heightSection2 = section2.offsetHeight;

let section3 = document.querySelector('#works');
// let heightSection3 = section3.offsetHeight;

let section4 = document.querySelector('#contactme');
// let heightSection4 = section4.offsetHeight;

var secciones = [body, section1, section2, section3, section4];

secciones.forEach((element) => {
  var altura = element.offsetHeight;
  console.log(secciones + altura);
});



/* let section = document.querySelectorAll(".section");
let

function activarEnScroll() {
  let = scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < active.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if(alturaAnimado - 100 < scrollTop) {
      active[i].addClass("active");
    }
  }
}

window.addEventListener('scroll', activarEnScroll);
*/

/* Envio de formulario de contacto */
const form = document.querySelector("#contact-form");
const buttonMailto = document.querySelector("#submitForm");

form.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault()
  const formData = new FormData(this)
  buttonMailto.setAttribute('href', `mailto:giannimoriconi1@gmail.com?subject=${"Contacto de "+ formData.get('name') +" "+formData.get('lastname')}&body=${"Compañía: "+formData.get('company')+"%0A"+formData.get('message')}`)
  buttonMailto.click()
}

/*Compartir*/

var shareButton = document.querySelector("a.social-link.share");

//Ejecutamos funciones
  $(shareButton).click(function(){
    event.preventDefault();
    $("#sharebox").css("bottom", "60px");
  });
