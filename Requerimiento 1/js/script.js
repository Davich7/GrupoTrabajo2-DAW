/**
 * Generacion de un formulario solo con javaScript
 */

/*
============ creacion de la estructura general del formulario ============ 
*/
const mainDiv = document.querySelector(".container");

//Formulario
const form = document.createElement("form");
form.setAttribute("action", "#");
form.setAttribute("method", "post");
mainDiv.appendChild(form);

const fieldsetGeneral = document.createElement("fieldset");
form.appendChild(fieldsetGeneral);

const leyendaFormulario = document.createElement("legend");
leyendaFormulario.textContent = "Pide tu cita";
leyendaFormulario.classList.add("form__titulo");
fieldsetGeneral.appendChild(leyendaFormulario);

//fieldset de datos personales para contacto
const fieldsetContacto = document.createElement("fieldset");
fieldsetContacto.setAttribute("id", "contacto");
fieldsetGeneral.appendChild(fieldsetContacto);

//fieldset con las opciones del servicio
const fieldsetOpciones = document.createElement("fieldset");
fieldsetOpciones.setAttribute("id", "servicio");
fieldsetGeneral.appendChild(fieldsetServicio);

//fieldset con las opciones de la cita
const fieldsetCita = document.createElement("fieldset");
fieldsetCita.setAttribute("id", "cita");
fieldsetGeneral.appendChild(fieldsetCita);

//fieldset de feedback ¿Cómo nos has conocido?
const fieldsetFeedBack = document.createElement("fieldset");
fieldsetFeedBack.setAttribute("id", "feedBack");
fieldsetGeneral.appendChild(fieldsetFeedBack);

//fieldset de los botones de Submit
const fieldsetAcciones = document.createElement("fieldset");
fieldsetAcciones.setAttribute("id", "acciones");
fieldsetGeneral.appendChild(fieldsetAcciones);


/*
============ Creación de la sección Datos Personales ============
*/

//Creación de la Leyenda del FieldSet Contacto
const leyendaContacto = document.createElement("legend");
leyendaContacto.textContent = "Tus datos de contacto";
fieldsetContacto.appendChild(leyendaContacto);



/*
============ Creación de la sección Servicio ============
*/


/*
============ Creación de la sección Cita ============
*/

/*
============ Creación de la sección FeedBack ============
*/

/*
============ Creación de la sección Submit ============
*/