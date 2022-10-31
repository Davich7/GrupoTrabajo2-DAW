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
const fieldsetServicio = document.createElement("fieldset");
fieldsetServicio.setAttribute("id", "servicio");
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

// div de la 1ª fila
const row1Con = document.createElement("div");
row1Con.classList.add("fieldset-row");
fieldsetContacto.appendChild(row1Con);

// div de la 1ª columna
const r1c1Con = document.createElement("div");
r1c1Con.classList.add("fieldset-column");
row1Con.appendChild(r1c1Con);

// Label de la 1ª columna
const labelContacto = document.createElement("label");
labelContacto.textContent = "Introduce tus datos:";
r1c1Con.appendChild(labelContacto);


// Contenedor de la 1ª caja de texto
const rowCon1 = document.createElement("div");
rowCon1.classList.add("inline-column");
r1c1Con.appendChild(rowCon1);




// Label de la 1º caja de texto
const labelCon1 = document.createElement("label");
labelCon1.setAttribute("id", "labelCon1");
labelCon1.setAttribute("for", "ConText1");
labelCon1.textContent = "Nombre ";

// Input de la 1º caja de texto
const inpCon1 = document.createElement("input");
inpCon1.setAttribute("type", "Text");
inpCon1.setAttribute("id", "ConText1");
inpCon1.setAttribute("placeholder", "Nombre");
inpCon1.setAttribute("required", "true");

rowCon1.appendChild(labelCon1);
rowCon1.appendChild(inpCon1);


// Contenedor de la 3ª caja de texto
const rowCon3 = document.createElement("div");
rowCon3.classList.add("inline-column");
r1c1Con.appendChild(rowCon3);

// Label de la 3º caja de texto
const labelCon3 = document.createElement("label");
labelCon3.setAttribute("id", "labelCon3");
labelCon3.setAttribute("for", "ConText3");
labelCon3.textContent = "Apellidos ";

// Input de la 3º caja de texto
const inpCon3 = document.createElement("input");
inpCon3.setAttribute("type", "Text");
inpCon3.setAttribute("id", "ConText3");
inpCon3.setAttribute("placeholder", "Apellidos");
inpCon3.setAttribute("required", "true");

rowCon3.appendChild(labelCon3);
rowCon3.appendChild(inpCon3);



// div de la 2ª columna
const r2c2Con = document.createElement("div");
r2c2Con.classList.add("fieldset-column");
row1Con.appendChild(r2c2Con);

//Contenedor de la segunda caja de texto
const rowCon2 = document.createElement("div");
rowCon2.classList.add("inline-column");
r2c2Con.appendChild(rowCon2);

// Label de la 2º caja de texto
const labelCon2 = document.createElement("label");

labelCon2.setAttribute("id", "labelCon2");
labelCon2.setAttribute("for", "ConText2");
labelCon2.textContent = "Dirección   ";

// Input de la 2º caja de texto
const inpCon2 = document.createElement("input");
inpCon2.setAttribute("type", "Text");
inpCon2.setAttribute("id", "ConText2");
inpCon2.setAttribute("placeholder", "Dirección");
inpCon2.setAttribute("required", "true");

rowCon2.appendChild(labelCon2);
rowCon2.appendChild(inpCon2);



////Contenedor de la 4ª caja de texto
const rowCon4 = document.createElement("div");
rowCon4.classList.add("inline-column");
r2c2Con.appendChild(rowCon4);

// Label de la 4º caja de texto
const labelCon4 = document.createElement("label");

labelCon4.setAttribute("id", "labelCon4");
labelCon4.setAttribute("for", "ConText4");
labelCon4.textContent = "Teléfono ";

// Input de la 4º caja de texto
const inpCon4 = document.createElement("input");
inpCon4.setAttribute("type", "Text");
inpCon4.setAttribute("id", "ConText4");
inpCon4.setAttribute("placeholder", "Telefono");
inpCon4.setAttribute("required", "true");

rowCon4.appendChild(labelCon4);
rowCon4.appendChild(inpCon4);


////Contenedor de la 6ª caja de texto
const rowCon6 = document.createElement("div");
rowCon6.classList.add("inline-column");
r2c2Con.appendChild(rowCon6);

//// Label de la 6º caja de texto
const labelCon6 = document.createElement("label");
labelCon6.setAttribute("id", "labelCon6");
labelCon6.setAttribute("for", "ConText6");
labelCon6.textContent = "DNI ";


// Input de la 6º caja de texto
const inpCon6 = document.createElement("input");
inpCon6.setAttribute("type", "Text");
inpCon6.setAttribute("id", "ConText6");
inpCon6.setAttribute("placeholder", "DNI");
inpCon6.setAttribute("required", "true");

rowCon6.appendChild(labelCon6);
rowCon6.appendChild(inpCon6);

