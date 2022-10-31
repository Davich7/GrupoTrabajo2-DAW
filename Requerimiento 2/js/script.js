/**
 * Generacion de un formulario con javascript
 */

/*
===================================================== creacion de la estructura general del formulario ===================================================== 
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
leyendaFormulario.textContent = "Realizar Pedido";
leyendaFormulario.classList.add("form__titulo");
fieldsetGeneral.appendChild(leyendaFormulario);

//fieldset de Contacto
const fieldsetContacto = document.createElement("fieldset");
fieldsetContacto.setAttribute("id", "contacto");
fieldsetGeneral.appendChild(fieldsetContacto);

//fieldset de Opciones
const fieldsetOpciones = document.createElement("fieldset");
fieldsetOpciones.setAttribute("id", "opciones-pizza");
fieldsetGeneral.appendChild(fieldsetOpciones);

//fieldset del pedido
const fieldsetPedido = document.createElement("fieldset");
fieldsetPedido.setAttribute("id", "restaurante");
fieldsetGeneral.appendChild(fieldsetPedido);

//fieldset de los botones de Submit y Reset
const fieldsetAcciones = document.createElement("fieldset");
fieldsetAcciones.setAttribute("id", "acciones");
fieldsetGeneral.appendChild(fieldsetAcciones);

/*
===================================================== creacion de la seccion contacto ===================================================== 
*/

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

// Label de la columna
const labelContacto = document.createElement("label");
labelContacto.textContent = "Introduce tus datos:";
r1c1Con.appendChild(labelContacto);

//Contenedor de la primera caja de texto
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

////Contenedor de la tercera caja de texto
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

////Contenedor de la cuarta caja de texto
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

////Contenedor de la sexta caja de texto
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

/*
===================================================== creacion de la seccion Opciones-pizza ===================================================== 
*/
const leyendaOpciones = document.createElement("legend");
leyendaOpciones.textContent = "¿Cómo te apetece la pizza?";
fieldsetOpciones.appendChild(leyendaOpciones);

// div de la 1ª fila de las diversas opciones de pizza
const row1Opc = document.createElement("div");
row1Opc.classList.add("fieldset-row");
fieldsetOpciones.appendChild(row1Opc);

// div de la columna donde irán los ingredientes
const r1c1Opc = document.createElement("div");
r1c1Opc.classList.add("fieldset-column");

row1Opc.appendChild(r1c1Opc);

// Nodos de la etiqueta label (ingredientes)
const labelCheckbox = document.createElement("label");
labelCheckbox.textContent = "Elige los ingredientes";
r1c1Opc.appendChild(labelCheckbox);

// Contenedor del 1er Checkbox
const rowCbox1 = document.createElement("div");
rowCbox1.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox1);
// Nodos del 1er Checkbox
const inpCbox1 = document.createElement("input");
inpCbox1.setAttribute("type", "checkbox");
inpCbox1.setAttribute("id", "cbox1");
inpCbox1.setAttribute("value", "Quesos");
//etiqueta label para el checkbox
const labelCbox1 = document.createElement("label");
labelCbox1.setAttribute("id", "labelcbox1");
labelCbox1.setAttribute("for", "cbox1");
labelCbox1.textContent = "Mezcla de quesos";
//Vincular el checkbox y label al div
rowCbox1.appendChild(inpCbox1);
rowCbox1.appendChild(labelCbox1);

// Contenedor del 2º Checkbox
const rowCbox2 = document.createElement("div");
rowCbox2.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox2);
// Nodos del 2º Checkbox
const inpCbox2 = document.createElement("input");
inpCbox2.setAttribute("type", "checkbox");
inpCbox2.setAttribute("id", "cbox2");
inpCbox2.setAttribute("value", "Champiñones");
//etiqueta label para el checkbox
const labelCbox2 = document.createElement("label");
labelCbox2.setAttribute("id", "labelcbox2");
labelCbox2.setAttribute("for", "cbox2");
labelCbox2.textContent = "Champiñones";
//Vincular el checkbox y label al div
rowCbox2.appendChild(inpCbox2);
rowCbox2.appendChild(labelCbox2);

// Contenedor del 3er Checkbox
const rowCbox3 = document.createElement("div");
rowCbox3.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox3);
// Nodos del 3er Checkbox
const inpCbox3 = document.createElement("input");
inpCbox3.setAttribute("type", "checkbox");
inpCbox3.setAttribute("id", "cbox3");
inpCbox3.setAttribute("value", "Bacon");
//etiqueta label para el checkbox
const labelCbox3 = document.createElement("label");
labelCbox3.setAttribute("id", "labelcbox3");
labelCbox3.setAttribute("for", "cbox3");
labelCbox3.textContent = "Bacon";
//Vincular el checkbox y label al div
rowCbox3.appendChild(inpCbox3);
rowCbox3.appendChild(labelCbox3);

// Contenedor del 4º Checkbox
const rowCbox4 = document.createElement("div");
rowCbox4.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox4);
// Nodos del 4º Checkbox
const inpCbox4 = document.createElement("input");
inpCbox4.setAttribute("type", "checkbox");
inpCbox4.setAttribute("id", "cbox4");
inpCbox4.setAttribute("value", "Aceitunas");
//etiqueta label para el checkbox
const labelCbox4 = document.createElement("label");
labelCbox4.setAttribute("id", "labelcbox4");
labelCbox4.setAttribute("for", "cbox4");
labelCbox4.textContent = "Tomates cherry";
//Vincular el checkbox y label al div
r1c1Opc.appendChild(inpCbox4);
r1c1Opc.appendChild(labelCbox4);
//Vincular el checkbox y label al div
rowCbox4.appendChild(inpCbox4);
rowCbox4.appendChild(labelCbox4);

// Contenedor del 5º Checkbox (inline)
const rowCbox5 = document.createElement("div");
rowCbox5.classList.add("inline-column");
r1c1Opc.appendChild(rowCbox5);
// Nodos del 5º Checkbox
const inpCbox5 = document.createElement("input");
inpCbox5.setAttribute("type", "checkbox");
inpCbox5.setAttribute("id", "cbox5");
inpCbox5.setAttribute("value", "Pollo");
//etiqueta label para el checkbox
const labelCbox5 = document.createElement("label");
labelCbox5.setAttribute("id", "labelcbox5");
labelCbox5.setAttribute("for", "cbox5");
labelCbox5.textContent = "Pollo";
//Vincular el checkbox y label al div
rowCbox5.appendChild(inpCbox5);
rowCbox5.appendChild(labelCbox5);

// div de la columna donde irá una imagen
const r1c2Opc = document.createElement("div");
r1c2Opc.classList.add("fieldset-column");
row1Opc.appendChild(r1c2Opc);
//Nodo de la img
const img1 = document.createElement("img");
img1.setAttribute("alt", "pizza1");
img1.src = "images/pizza1.jpg";
img1.width = "200";
//Vincular la img al div
r1c2Opc.appendChild(img1);

/*--------------------------
--------Radio Button 1------
---------------------------*/

//Div de la 1ª fila de los tipos de masa
const row2Opc = document.createElement("div");
row2Opc.classList.add("fieldset-row");
fieldsetOpciones.appendChild(row2Opc);

//Div de la columna donde irán los tipos de masa
const r2c1Opc = document.createElement("div");
r2c1Opc.classList.add("fieldset-column");
row2Opc.appendChild(r2c1Opc);

//Nodos de la etiqueta label (masa)
const labelRbMasa = document.createElement("label");
labelRbMasa.textContent = "Elige el tipo de masa";
r2c1Opc.appendChild(labelRbMasa);



//Contenedor del 1er Radio Button 
const rowRb1 = document.createElement("div");
rowRb1.classList.add("inline-column");
r2c1Opc.appendChild(rowRb1);
//Nodos 
const inpRb1 = document.createElement("input");
inpRb1.setAttribute("type", "radio");
inpRb1.setAttribute("id", "rb1");
inpRb1.setAttribute("name", "rbmasa");
inpRb1.setAttribute("value", "fina");
inpRb1.setAttribute("required", "required");
//Etiqueta label
const labelRbMasa1 = document.createElement("label");
labelRbMasa1.setAttribute("id", "labelrb1");
labelRbMasa1.setAttribute("for", "rb1");
labelRbMasa1.textContent="Fina";
//Vincular el radio button y label al div
rowRb1.appendChild(inpRb1);
rowRb1.appendChild(labelRbMasa1); 

//Contenedor del 2º Radio Button 
const rowRb2 = document.createElement("div");
rowRb2.classList.add("inline-column");
r2c1Opc.appendChild(rowRb2);
//Nodos 
const inpRb2 = document.createElement("input");
inpRb2.setAttribute("type", "radio");
inpRb2.setAttribute("id", "rb2");
inpRb2.setAttribute("name", "rbmasa");
inpRb2.setAttribute("value", "normal");
inpRb2.setAttribute("required", "required");

//Etiqueta label
const labelRbMasa2 = document.createElement("label");
labelRbMasa2.setAttribute("id", "labelrb2");
labelRbMasa2.setAttribute("for", "rb2");
labelRbMasa2.textContent="Normal";
//Vincular el radio button y label al div
rowRb2.appendChild(inpRb2);
rowRb2.appendChild(labelRbMasa2);

//Contenedor del 3er Radio Button 
const rowRb3 = document.createElement("div");
rowRb3.classList.add("inline-column");
r2c1Opc.appendChild(rowRb3);
//Nodos 
const inpRb3 = document.createElement("input");
inpRb3.setAttribute("type", "radio");
inpRb3.setAttribute("id", "rb3");
inpRb3.setAttribute("name", "rbmasa");
inpRb3.setAttribute("value", "extra");
inpRb3.setAttribute("required", "required");

//Etiqueta label
const labelRbMasa3 = document.createElement("label");
labelRbMasa3.setAttribute("id", "labelrb3");
labelRbMasa3.setAttribute("for", "rb3");
labelRbMasa3.textContent="Extra";
//Vincular el radio button y label al div
rowRb3.appendChild(inpRb3);
rowRb3.appendChild(labelRbMasa3);

//Contenedor del 4º Radio Button 
const rowRb4 = document.createElement("div");
rowRb4.classList.add("inline-column");
r2c1Opc.appendChild(rowRb4);
//Nodos 
const inpRb4 = document.createElement("input");
inpRb4.setAttribute("type", "radio");
inpRb4.setAttribute("id", "rb4");
inpRb4.setAttribute("name", "rbmasa");
inpRb4.setAttribute("value", "extraqueso");
inpRb4.setAttribute("required", "required");

//Etiqueta label
const labelRbMasa4 = document.createElement("label");
labelRbMasa4.setAttribute("id", "labelrb4");
labelRbMasa4.setAttribute("for", "rb4");
labelRbMasa4.textContent="Extra con queso";
//Vincular el radio button y label al div
rowRb4.appendChild(inpRb4);
rowRb4.appendChild(labelRbMasa4);

/*--------------------------
--------Radio Button 2------
---------------------------*/

//Div de la 1ª fila de los tamaños de pizza
// const row3Opc = document.createElement("div");
// row3Opc.classList.add("fieldset-row");
// fieldsetOpciones.appendChild(row3Opc);

//Div de la columna donde irán los tipos de masa
const r2c2Opc = document.createElement("div");
r2c2Opc.classList.add("fieldset-column");
row2Opc.appendChild(r2c2Opc);

//Nodos de la etiqueta label (masa)
const labelRbTam = document.createElement("label");
labelRbTam.textContent = "Elige el tamaño";
r2c2Opc.appendChild(labelRbTam);


//Contenedor del 1er Radio Button 
const rowRb5 = document.createElement("div");
rowRb5.classList.add("inline-column");
r2c2Opc.appendChild(rowRb5);
//Nodos 
const inpRb5 = document.createElement("input");
inpRb5.setAttribute("type", "radio");
inpRb5.setAttribute("id", "rb5");
inpRb5.setAttribute("name", "rbtam");
inpRb5.setAttribute("value", "pequeña");
inpRb5.setAttribute("required", "required");

//Etiqueta label
const labelRbTam5 = document.createElement("label");
labelRbTam5.setAttribute("id", "labelrb5");
labelRbTam5.setAttribute("for", "rb5");
labelRbTam5.textContent="Pequeña";
//Vincular el radio button y label al div
rowRb5.appendChild(inpRb5);
rowRb5.appendChild(labelRbTam5); 

//Contenedor del 2º Radio Button 
const rowRb6 = document.createElement("div");
rowRb6.classList.add("inline-column");
r2c2Opc.appendChild(rowRb6);
//Nodos 
const inpRb6 = document.createElement("input");
inpRb6.setAttribute("type", "radio");
inpRb6.setAttribute("id", "rb6");
inpRb6.setAttribute("name", "rbtam");
inpRb6.setAttribute("value", "mediana");
inpRb6.setAttribute("required", "required");

//Etiqueta label
const labelRbTam6 = document.createElement("label");
labelRbTam6.setAttribute("id", "labelrb6");
labelRbTam6.setAttribute("for", "rb6");
labelRbTam6.textContent="Mediana";
//Vincular el radio button y label al div
rowRb6.appendChild(inpRb6);
rowRb6.appendChild(labelRbTam6); 

//Contenedor del 3er Radio Button 
const rowRb7 = document.createElement("div");
rowRb7.classList.add("inline-column");
r2c2Opc.appendChild(rowRb7);
//Nodos 
const inpRb7 = document.createElement("input");
inpRb7.setAttribute("type", "radio");
inpRb7.setAttribute("id", "rb7");
inpRb7.setAttribute("name", "rbtam");
inpRb7.setAttribute("value", "familiar");
inpRb7.setAttribute("required", "required");

//Etiqueta label
const labelRbTam7 = document.createElement("label");
labelRbTam7.setAttribute("id", "labelrb7");
labelRbTam7.setAttribute("for", "rb7");
labelRbTam7.textContent="Familiar";
//Vincular el radio button y label al div
rowRb7.appendChild(inpRb7);
rowRb7.appendChild(labelRbTam7);

//Contenedor del 4º Radio Button 
const rowRb8 = document.createElement("div");
rowRb8.classList.add("inline-column");
r2c2Opc.appendChild(rowRb8);
//Nodos 
const inpRb8 = document.createElement("input");
inpRb8.setAttribute("type", "radio");
inpRb8.setAttribute("id", "rb8");
inpRb8.setAttribute("name", "rbtam");
inpRb8.setAttribute("value", "dinosaurica");

inpRb8.setAttribute("required", "required");

//Etiqueta label
const labelRbTam8 = document.createElement("label");
labelRbTam8.setAttribute("id", "labelrb8");
labelRbTam8.setAttribute("for", "rb8");
labelRbTam8.textContent="Dinosáurica";
//Vincular el radio button y label al div
rowRb8.appendChild(inpRb8);
rowRb8.appendChild(labelRbTam8);

/*
===================================================== creacion de la seccion Pedido ===================================================== 
*/

//creacion de la seccion Restaurante 
//leyenda
const leyendaRestaurante = document.createElement("legend");
leyendaRestaurante.textContent = "Sobre el pedido";
fieldsetPedido.appendChild(leyendaRestaurante);

//primera fila (div para formato)
const row1Ped = document.createElement("div");
row1Ped.classList.add("fieldset-row");
fieldsetPedido.appendChild(row1Ped);

//primera columna(div para formato)
const r1c1Ped = document.createElement("div");
r1c1Ped.classList.add("fieldset-column");
row1Ped.appendChild(r1c1Ped);

//seleccionador del restaurante
const labelSelect = document.createElement("label");
labelSelect.setAttribute("for", "restaurante");
labelSelect.textContent = "Elige un restaurante";
r1c1Ped.appendChild(labelSelect);

const selectRestaurante = document.createElement("select");
selectRestaurante.setAttribute("name", "restaurante");
selectRestaurante.setAttribute("id", "restaurante");
selectRestaurante.setAttribute("required", "required");
r1c1Ped.appendChild(selectRestaurante);

//opciones del select
const placeholder = document.createElement("option");
placeholder.setAttribute("value", "");
placeholder.textContent = "Elige un restaurante";

const opcionA = document.createElement("option");
opcionA.setAttribute("value", "res1");
opcionA.textContent = "La casina de Paulina";

const opcionB = document.createElement("option");
opcionB.setAttribute("value", "res2");
opcionB.textContent = "Ixchel's Hollywok";

const opcionC = document.createElement("option");
opcionC.setAttribute("value", "res3");
opcionC.textContent = "PizzalPilpilar";

const opcionD = document.createElement("option");
opcionD.setAttribute("value", "res4");
opcionD.textContent = "La Pizza Pagana de Jana";

selectRestaurante.appendChild(placeholder);
selectRestaurante.appendChild(opcionA);
selectRestaurante.appendChild(opcionB);
selectRestaurante.appendChild(opcionC);
selectRestaurante.appendChild(opcionD);


//Sección del textarea

//Creación de la fila para el label
const rowText = document.createElement("div");
rowText.classList.add("fieldset-row");
fieldsetPedido.appendChild(rowText);


//Label del textarea
const labelText = document.createElement("label");
labelText.setAttribute("for", "textArea");
labelText.textContent = "Introduce aquí información sobre alergias u otras notas adicionales: ";

//Creación de la fila para el texarea
const rowText1 = document.createElement("div");
rowText1.classList.add("fieldset-row");
fieldsetPedido.appendChild(rowText1);
r1c1Ped.appendChild(labelText);


//Creación del textarea
const inpText = document.createElement("textarea");
inpText.setAttribute("id", "textArea");
inpText.setAttribute("cols", 40);
inpText.setAttribute("rows", 4)
inpText.setAttribute("placeholder", "Escribe aquí:");

r1c1Ped.appendChild(inpText);


//div de la columna donde irá la segunda imagen
const r2c2Ped = document.createElement("div");
r2c2Ped.classList.add("fieldset-column");
row1Ped.appendChild(r2c2Ped);
//Nodo de la img
const img2 = document.createElement("img");
img2.setAttribute("alt", "pizzeria");
img2.src = "images/pizzeria.jpg";
img2.width = "300";
//Vincular la img al div
r2c2Ped.appendChild(img2);

//segunda fila (div para formato)
const row2Ped = document.createElement("div");
row2Ped.classList.add("fieldset-row");
fieldsetPedido.appendChild(row2Ped);

//primera columna(div para formato)
const r2c1Ped = document.createElement("div");
r2c1Ped.classList.add("fieldset-column");
r2c1Ped.classList.add("inline-column");
row2Ped.appendChild(r2c1Ped);

//checkbox terminos y condiciones
const terminos = document.createElement("input");
terminos.setAttribute("type", "checkbox");
terminos.setAttribute("name", "terminos");
terminos.setAttribute("id", "terminos");
terminos.setAttribute("value", "s");
terminos.setAttribute("required", "required");
r2c1Ped.appendChild(terminos);

const labelTerminos = document.createElement("label");
labelTerminos.setAttribute("for", "terminos");
labelTerminos.textContent = "Acepto los términos y condiciones";
r2c1Ped.appendChild(labelTerminos);

/*
===================================================== validación del formulario ===================================================== 
*/
//boton de envio
const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("id", "submit");
submit.textContent = "Realizar Pedido";
submit.classList.add("cta");
fieldsetAcciones.appendChild(submit);

//boton de reseteo
const reset = document.createElement("button");
reset.setAttribute("type", "reset");
reset.setAttribute("name", "reset");
reset.setAttribute("id", "reset");
reset.textContent = "Borrar formulario";
fieldsetAcciones.appendChild(reset);

/*
===================================================== validación del formulario ===================================================== 
*/
submit.addEventListener("click", () => {
  const elementosObligatorios = document.querySelectorAll("[required]")
  for (let elemento of elementosObligatorios) {
    elemento.classList.add("validar");
  }
});
