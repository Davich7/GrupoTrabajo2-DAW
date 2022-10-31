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


//---Primer contenedor general--//

/* Crearemos primero los contenedores de la columna izquierda y luego la derecha. 
*  Con un poco de css los situaremos
*/


//Creación de la Leyenda del FieldSet Contacto
const leyendaContacto = document.createElement("legend");
leyendaContacto.textContent = "Tus datos de contacto";
fieldsetContacto.appendChild(leyendaContacto);

// div de la 1ª fila que servirá de contenedor general
const row1Con = document.createElement("div");
row1Con.classList.add("fieldset-row");
fieldsetContacto.appendChild(row1Con);

// div de la 1ª columna que contendrá DNI, Nombre y Apellidos
const r1c1Con = document.createElement("div");
r1c1Con.classList.add("fieldset-column");
row1Con.appendChild(r1c1Con);

// Label de la 1ª columna que servirá de label para todos los datos
const labelContacto = document.createElement("label");
labelContacto.textContent = "Introduce tus datos:";
r1c1Con.appendChild(labelContacto);


//---DNI---//

// Contenedor de la 1ª caja de texto
const rowCon1 = document.createElement("div");
rowCon1.classList.add("inline-column");
r1c1Con.appendChild(rowCon1);

// Label de la 1º caja de texto
const labelCon1 = document.createElement("label");
labelCon1.setAttribute("id", "labelCon1");
labelCon1.setAttribute("for", "ConText1");
labelCon1.textContent = "DNI ";

// Input de la 1º caja de texto
const inpCon1 = document.createElement("input");
inpCon1.setAttribute("type", "Text");
inpCon1.setAttribute("id", "ConText1");
inpCon1.setAttribute("placeholder", "DNI");
inpCon1.setAttribute("required", "true");

rowCon1.appendChild(labelCon1);
rowCon1.appendChild(inpCon1);


//---Nombre---//

// Contenedor de la 3ª caja de texto
const rowCon3 = document.createElement("div");
rowCon3.classList.add("inline-column");
r1c1Con.appendChild(rowCon3);

// Label de la 3º caja de texto
const labelCon3 = document.createElement("label");
labelCon3.setAttribute("id", "labelCon3");
labelCon3.setAttribute("for", "ConText3");
labelCon3.textContent = "Nombre ";

// Input de la 3º caja de texto
const inpCon3 = document.createElement("input");
inpCon3.setAttribute("type", "Text");
inpCon3.setAttribute("id", "ConText3");
inpCon3.setAttribute("placeholder", "Nombre");
inpCon3.setAttribute("required", "true");

rowCon3.appendChild(labelCon3);
rowCon3.appendChild(inpCon3);


//---Apellidos---//

// Contenedor de la 5ª caja de texto
const rowCon5 = document.createElement("div");
rowCon5.classList.add("inline-column");
r1c1Con.appendChild(rowCon5);

// Label de la 5º caja de texto
const labelCon5 = document.createElement("label");
labelCon5.setAttribute("id", "labelCon5");
labelCon5.setAttribute("for", "ConText5");
labelCon5.textContent = "Apellidos ";

// Input de la 5º caja de texto
const inpCon5 = document.createElement("input");
inpCon5.setAttribute("type", "Text");
inpCon5.setAttribute("id", "ConText5");
inpCon5.setAttribute("placeholder", "Apellidos");
inpCon5.setAttribute("required", "true");

rowCon5.appendChild(labelCon5);
rowCon5.appendChild(inpCon5);




//El segundo div contendrá la dirección y el teléfoto

// div de la 2ª columna
const r2c2Con = document.createElement("div");
r2c2Con.classList.add("fieldset-column");
row1Con.appendChild(r2c2Con);

//----- Dirección ------//

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


//----- Teléfono ------//

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




/*
============ Creación de la sección Servicio ============
*/

//------ Estructura general de Servicio ------//


//Creación de la Leyenda del FieldSet Servicio
const leyendaServicio = document.createElement("legend");
leyendaServicio.textContent = "¿Para que servicio quieres pedir cita?";
fieldsetServicio.appendChild(leyendaServicio);



//-------- 1º fila ------//
// div de la 1ª fila donde situaremos los radioButtons para elegir el tipo de Servicio
const row1Serv = document.createElement("div");
row1Serv.classList.add("fieldset-row");
fieldsetServicio.appendChild(row1Serv);

// div de la columna donde irá el Radio Button con los  servicios a elegir
const r1c1Serv = document.createElement("div");
r1c1Serv.classList.add("fieldset-column");
row1Serv.appendChild(r1c1Serv);


/*------------------------/
/---- Radio Button 1 -----/
/------------------------*/

// Nodos de la etiqueta label (Tipos de servicio)
const labelRbTipo = document.createElement("label");
labelRbTipo.textContent = "Elige el tipo de servicio";
r1c1Serv.appendChild(labelRbTipo);


//----RB Opción 1 ----//
//Contenedor de la primera opción del RB
const rowRb1 = document.createElement("div");
rowRb1.classList.add("inline-column");
r1c1Serv.appendChild(rowRb1);

//Nodos 
const inpRb1 = document.createElement("input");
inpRb1.setAttribute("type", "radio");
inpRb1.setAttribute("id", "rb1");
inpRb1.setAttribute("name", "rbtipo");
inpRb1.setAttribute("value", "primeracita");
inpRb1.setAttribute("required", "required");

//Etiqueta label
const labelRbTipo1 = document.createElement("label");
labelRbTipo1.setAttribute("id", "labelrb1");
labelRbTipo1.setAttribute("for", "rb1");
labelRbTipo1.textContent="Primera cita de evaluación";

//Vincular el radio button y label al div
rowRb1.appendChild(inpRb1);
rowRb1.appendChild(labelRbTipo1); 


//----RB Opción 2 ----//

//Contenedor de la 2ª opción del RB
const rowRb2 = document.createElement("div");
rowRb2.classList.add("inline-column");
r1c1Serv.appendChild(rowRb2);

//Nodos 
const inpRb2 = document.createElement("input");
inpRb2.setAttribute("type", "radio");
inpRb2.setAttribute("id", "rb2");
inpRb2.setAttribute("name", "rbtipo");
inpRb2.setAttribute("value", "terapia");
inpRb2.setAttribute("required", "required");

//Etiqueta label
const labelRbTipo2 = document.createElement("label");
labelRbTipo2.setAttribute("id", "labelrb2");
labelRbTipo2.setAttribute("for", "rb2");
labelRbTipo2.textContent="Terapia Cognitivo Conductual";

//Vincular el radio button y label al div
rowRb2.appendChild(inpRb2);
rowRb2.appendChild(labelRbTipo2);


//----RB Opción 3 ----//

//Contenedor de la 3ª opción del RB 
const rowRb3 = document.createElement("div");
rowRb3.classList.add("inline-column");
r1c1Serv.appendChild(rowRb3);

//Nodos 
const inpRb3 = document.createElement("input");
inpRb3.setAttribute("type", "radio");
inpRb3.setAttribute("id", "rb3");
inpRb3.setAttribute("name", "rbtipo");
inpRb3.setAttribute("value", "coach");
inpRb3.setAttribute("required", "required");

//Etiqueta label
const labelRbTipo3 = document.createElement("label");
labelRbTipo3.setAttribute("id", "labelrb3");
labelRbTipo3.setAttribute("for", "rb3");
labelRbTipo3.textContent="Sesión de coaching";

//Vincular el radio button y label al div
rowRb3.appendChild(inpRb3);
rowRb3.appendChild(labelRbTipo3);


//----RB Opción 4 ----//

//Contenedor de la 4ª opción del RB
const rowRb4 = document.createElement("div");
rowRb4.classList.add("inline-column");
r1c1Serv.appendChild(rowRb4);

//Nodos 
const inpRb4 = document.createElement("input");
inpRb4.setAttribute("type", "radio");
inpRb4.setAttribute("id", "rb4");
inpRb4.setAttribute("name", "rbtipo");
inpRb4.setAttribute("value", "psiquiatra");
inpRb4.setAttribute("required", "required");

//Etiqueta label
const labelRbTipo4 = document.createElement("label");
labelRbTipo4.setAttribute("id", "labelrb4");
labelRbTipo4.setAttribute("for", "rb4");
labelRbTipo4.textContent="Cita con Psiquiatra";

//Vincular el radio button y label al div
rowRb4.appendChild(inpRb4);
rowRb4.appendChild(labelRbTipo4);


//----- Imagen 1 ------//
// Div de la columna donde irá una imagen
const r1c2Serv = document.createElement("div");
r1c2Serv.classList.add("fieldset-column");
row1Serv.appendChild(r1c2Serv);
//Nodo de la img
const img1 = document.createElement("img");
img1.setAttribute("alt", "terapeuta_sentado_con_niño_al_lado");
img1.src = "images/terapeuta.jpg";
img1.width = "200";
//Vincular la img al div
r1c2Serv.appendChild(img1);


//-------- 2º fila ------//

// div de la 2ª fila de las 
const row2Serv = document.createElement("div");
row2Serv.classList.add("fieldset-row");
fieldsetServicio.appendChild(row2Serv);


//----- Imagen 2 ------//
// Div de la columna donde irá otra imagen

const r2c1Serv = document.createElement("div");
r2c1Serv.classList.add("fieldset-column");
row2Serv.appendChild(r2c1Serv);
//Nodo de la img
const img2 = document.createElement("img");
img2.setAttribute("alt", "las_cuatro_torres_madrid");
img2.src = "images/cuatroTorres.jpg";
img2.width = "200";
//Vincular la img al div
r2c1Serv.appendChild(img2);


//------ 2º Columna 2º fila ------//

// Div de la 2º columna donde irá el segundo radio Button

const r2c2Serv = document.createElement("div");
r2c2Serv.classList.add("fieldset-column");
row2Serv.appendChild(r2c2Serv);

/*------------------------/
/---- Radio Button 2 -----/
/------------------------*/

// Nodos de la etiqueta label con los centros a elegir
const labelRbNom = document.createElement("label");
labelRbNom.textContent = "Elige un centro para la cita";
r2c2Serv.appendChild(labelRbNom);


//----RB Opción 1 ----//
//Contenedor de la primera opción del RB 2
const rowRb5 = document.createElement("div");
rowRb5.classList.add("inline-column");
r2c2Serv.appendChild(rowRb5);

//Nodos 
const inpRb5 = document.createElement("input");
inpRb5.setAttribute("type", "radio");
inpRb5.setAttribute("id", "rb1");
inpRb5.setAttribute("name", "rbnom");
inpRb5.setAttribute("value", "castellana");
inpRb5.setAttribute("required", "required");

//Etiqueta label
const labelRbNom5 = document.createElement("label");
labelRbNom5.setAttribute("id", "labelrb5");
labelRbNom5.setAttribute("for", "rb5");
labelRbNom5.textContent="Paseo de la Castellana 234 (Madrid)";

//Vincular el radio button y label al div
rowRb5.appendChild(inpRb5);
rowRb5.appendChild(labelRbNom5); 


//----RB Opción 2 ----//

//Contenedor de la 2ª opción del RB 2
const rowRb6 = document.createElement("div");
rowRb6.classList.add("inline-column");
r2c2Serv.appendChild(rowRb6);

//Nodos 
const inpRb6 = document.createElement("input");
inpRb6.setAttribute("type", "radio");
inpRb6.setAttribute("id", "rb6");
inpRb6.setAttribute("name", "rbnom");
inpRb6.setAttribute("value", "santamaria");
inpRb6.setAttribute("required", "required");

//Etiqueta label
const labelRbNom6 = document.createElement("label");
labelRbNom6.setAttribute("id", "labelrb6");
labelRbNom6.setAttribute("for", "rb6");
labelRbNom6.textContent="Centro en Santa Maria de la Cabeza 5 (Madrid)";

//Vincular el radio button y label al div
rowRb6.appendChild(inpRb6);
rowRb6.appendChild(labelRbNom6);


//----RB Opción 3 ----//

//Contenedor de la 3ª opción del RB 2
const rowRb7 = document.createElement("div");
rowRb7.classList.add("inline-column");
r2c2Serv.appendChild(rowRb7);

//Nodos 
const inpRb7 = document.createElement("input");
inpRb7.setAttribute("type", "radio");
inpRb7.setAttribute("id", "rb7");
inpRb7.setAttribute("name", "cercedilla");
inpRb7.setAttribute("value", "coach");
inpRb7.setAttribute("required", "required");

//Etiqueta label
const labelRbNom7 = document.createElement("label");
labelRbNom7.setAttribute("id", "labelrb7");
labelRbNom7.setAttribute("for", "rb7");
labelRbNom7.textContent="Centro en C/Doctor Cañadas (Cercedilla)";

//Vincular el radio button y label al div
rowRb7.appendChild(inpRb7);
rowRb7.appendChild(labelRbNom7);


//----RB Opción 4 ----//

//Contenedor de la 4ª opción del RB 2
const rowRb8 = document.createElement("div");
rowRb8.classList.add("inline-column");
r2c2Serv.appendChild(rowRb8);

//Nodos 
const inpRb8 = document.createElement("input");
inpRb8.setAttribute("type", "radio");
inpRb8.setAttribute("id", "rb4");
inpRb8.setAttribute("name", "rbnom");
inpRb8.setAttribute("value", "alcorcón");
inpRb8.setAttribute("required", "required");

//Etiqueta label
const labelRbNom8 = document.createElement("label");
labelRbNom8.setAttribute("id", "labelrb8");
labelRbNom8.setAttribute("for", "rb8");
labelRbNom8.textContent="C/Guindales 7 (Alcorcón";

//Vincular el radio button y label al div
rowRb8.appendChild(inpRb8);
rowRb8.appendChild(labelRbNom8);




