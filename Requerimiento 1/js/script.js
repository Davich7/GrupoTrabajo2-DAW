/**
 * Generacion de un formulario solo con javaScript
 */

/*
============ creacion de la estructura general del formulario ============ 
*/
const mainDiv = document.querySelector(".container");

//formulario
const form = document.createElement("form");
form.setAttribute("action", "#");
form.setAttribute("method", "post");
mainDiv.appendChild(form);

const fieldsetGeneral = document.createElement("fieldset");
form.appendChild(fieldsetGeneral);

const leyendaFormulario = document.createElement("legend");
leyendaFormulario.textContent = "Formulario";
leyendaFormulario.classList.add("form__titulo");
fieldsetGeneral.appendChild(leyendaFormulario);

