                       //  FUNCIÓN WINDOW.ONLOAD
                       window.onload = function () {  //Creamos una función window.onload  para asegurarnos de que el html se ha cargado completamente antes de 
                        console.log("pizza"); //pasar a la validación del formulario.
                                          //  DECLARACIÓN DE LAS VARIABLES
                    
                      var formulario = document.getElementById("formulario"), //Creamos la variable "formulario" a través de cual la accederemos al resto de valores que lo contengas con getElementById.
                      nombre = formulario.nombre,   //vamos creando las variables de los campos del formulario sobre el que vamos a trabajar accediente a trevés de la variable "formulario".
                      direccion = formulario.direccion,
                      telefono = formulario.telefono,
                      email = formulario.email;
                    
                      // Creamos la varable que contendrá la expresión regular de control para verificar que el nombre empieza por mayúscula y el resto del nombre irá en minúsculas.
                      var expresionNombre = ("^[A-Z][a-z]"); 
                    
                      /* Creamos la varable que contendrá la expresión regular de control para verificar que el email tiene un formato válido. 
                       Sigue estas normas:
                        [] Bracket, alternativa, reconoce cualquiera de los símbolos definidos dentro
                        - El literal - (porque va al principio, si estuviera entre otros dos símbolos representaría el rango entre ambos: 0-9).
                        \w Clase w, que representa "símbolos que van en palabras"; letras y números: A-Za-z0-9 y underscore _
                        . El literal ., que es un símbolo válido en el e-mail. Fuera del bracket representa un comodín, pero dentro del bracket solo representa el literal.
                        % El literal %, que es un símbolo válido en el e-mail.
                        + El literal +, que es un símbolo válido en el e-mail. Fuera del bracket representaría "una o más repeticiones", pero dentro del bracket solo representa el literal.
                        {1,64} De 1 a 64 repeticiones.*/
                    
                        var expresionMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                    
                        /* Creamos la varable que contendrá la expresión regular de control para verificar que el teléfono es válido. Debe iniciar con 9 o con 6, formato teléfono España: los fijos
                      empiezan por 9 y los moviles por 6 o 7. Los números pueden ir seguidos, separados en grupo de dos con un guión, o grupos de tres*/
                      var expresionTelefono = /^[9|6|7]{1}([\d]{2}[-]*){3}[\d]{2}$/
                    
                      function validacion() {  //Creamos la funcion con la que vamos a validar los campos del formulario. Crearemos un bucle de condicionales con el que recorreremos campo a campo e iremos 
                        // comprobando que se cumplan las especificaciones paso a paso.
                        
                        if (nombre.value == "" || nombre.length == 0) {  //primer condicional: obtenemos el valor del campo "nombre" y establecemos que si no tiene texto salte un alert avisando al usuario:
                          alert("Debe rellenar el campo 'Nombre'.");
                          return false; // mientras no se cumpla la condición, se devuelve un "false" que para el bucle hasta que la condición se cumpla y no permite pasar al siguiente.
                        } 
                        else {
                          var formatoNombre = document.getElementById("nombre").value; //en la siguiente condición, obtenemos el valor del elemento "nombre" y lo asignamos a una variable.
                          if (!formatoNombre.match(expresionNombre)) {  // si el contenido de la variable no coincide con lo que hemos declarado como un formato válido en la variable "expresionNombre" con el método test().
                            alert("El formato del campo 'Nombre' es incorrecto"); //Useamos test() cuando queremos saber si existe la ocurrencia de un patrón en una cadena.
                            return false;// si no lo cumple, nuevo alert para que el usuario modifique el valor de entrada y detenemos el bucle hasta que la condición se cumpla.
                          }
                          if (direccion.value == "" || direccion.length == 0) { //Saltamos al siguiente campo. En este caso, sólo nos obliga a que este relleno. Obtenemos el valor y realizamos la comprobación.
                            alert("Debe rellenar el campo  'Dirección'."); // tambien podía establecerse la comprobación con direccion.value==null. Salta alert y paramos bucle hasta que devuelva true.
                            return false;
                          }
                          if (telefono.value == "" || telefono.value == null) { // Pasamos al campo "Teléfono", comprobamos que no esté en blanco.
                            alert("Debe rellenar el campo 'Teléfono'.");
                            return false;
                          }
                          formatoTelefono = document.getElementById("telefono").value; //Si el campo esta relleno, pasamos a la validación del formato. Obtenemos el valor del campo y lo almacenamos en una variable.
                          if (!expresionTelefono.test(formatoTelefono)) {  // comparamos la variable obtenida con la que hemos declarado que sería un formato de telefono válido en España.
                            alert("El formato del campo 'Teléfono' es incorrecto"); // si no es válido, salta el alert y paramos el bucle.
                            return false;
                          }
                          
                          if (email.value == "" || email.value == null) {   //Vamos al último campo de los datos del usuario. Obtenemos el valor del campo email y lo almacenamos en una variable. 
                            alert("Debe rellenar el campo 'Email'.");  // Comprobamos si el campo esta relleno o no. Si no está relleno, salta el alert y paramos el bucle.
                            return false;
                          }
                        formatoEmail = document.getElementById("email").value; // Obtenemos el valor del email y lo asignamos a una variable.
                        if (!expresionMail.test(formatoEmail)) { // // comparamos la variable obtenida con la que hemos declarado que sería un formato de email válido.
                          alert("El formato del campo 'Email' es incorrecto."); // Si no hay ocurrencia, salta alert y paramos bucle.
                          return false;
                        }
                        tamaños = document.getElementsByName("tamaño"); //Pasamos a validar lo botones radio. Obtenemos un array con los elementos cuto atributo Nombre sea "Tamaño" y lo almacenamos en una variable.
                        var seleccionado = false; // creamos una variable para el valor seleccionado y lo iniciamos en false.
                        for (var i = 0; i < tamaños.length; i++) { //recorremos el array obtenido
                          if (tamaños[i].checked) { // si en una opción radio determinada, la propiedad esta seleccionada
                            seleccionado = true; // la variable seleccionado se reasigna como true y salimos del bucle for.
                            break; 
                          }
                        } 
                        if (!seleccionado) {  //  Si no hay ninguna opción seleccionada salta alert y paramos la validación hasta que cumpla la condición.
                          alert("Selecciona un tamaño para la pizza.");
                          return false;
                        }
                        ingredientes = document.getElementsByClassName("ingrediente"); // Repetimos el mismo proceso con los botones check. A pesar de que estos botones si permiten una selección múltiple, 
                        var check = false;  // la única condición que tenemos es que al menos uno debe estar seleccionado, asi que, en cuanto hay uno con la propiedad 
                        for (var i = 0; i < ingredientes.length; i++) {        
                          if (ingredientes[i].checked) {
                            check = true;
                            break; 
                          }
                        } 
                        if (!check) {
                          alert(" Seleccionar minimo un ingrediente.");
                          return false;
                        }
                    
                    // CÁLCULO PRECIO
                        var precioTamaño;   //Creamos una variable en la que almacenaremos el valor del elemento que esté seleccionado. No le asignamos valor.
                        tamaño = document.getElementsByName("tamaño");  // Obtenemos todos los valores de los botones radio a través del nombre del elemento y almacenamos el array que nos devuelve el método .getElementByName.
                        for (var i = 0; i < tamaño.length; i++) { // recorremos el array obtenido con un bucle for.
                          if (tamaño[i].checked) {  // 
                            precioTamaño = parseInt(tamaño[i].value); // ... la almacenamos en la variable que habiamos creado antes. Utilizamos el método parseInt ya que el valor obtenido es una cadena y necesitamos un número para realizar las operaciones.
                            break;
                          }
                        }
                        var precioIngrediente=0;  //Creamos una variable en la que almacenaremos el valor del elemento que esté seleccionado. No le asignamos valor.
                        ingrediente = document.getElementsByName("ingrediente");// Obtenemos todos los valores de los botones check a través del nombre del elemento y almacenamos el array que nos devuelve el método .getElementByName.
                        for (var i = 0; i < ingrediente.length; i++) {  // recorremos el array obtenido con un bucle for.
                          if (ingrediente[i].checked) { // si hay una opción seleccionada...
                            precioIngrediente += parseInt(ingrediente[i].value); //...la almacenamos en la variable que habiamos creado antes,  y con parseInt obtenemos un valor numérico. 
                                                                                 //Como puede haber varios seleccionados, utilizamos un operador acumulativo para que se vayan sumando los distintos valores que tome la variable i.
                            console.log(precioIngrediente)
                    
                    
                          }
                        }
                    
                        var precioPizza = precioTamaño + precioIngrediente; // Para calcular el precio total, sumamos el el valor acumulado en la variable que hemos obtenido de los botones radio y los de los botones check.
                    
                        alert("El precio total de tu pizza es de  " + precioPizza+"€. ¡Empieza la preparacion!"); // Mostramos el valor total de la pizza.
                        return true; //y salimos de la función
                      }
                    
                    } 
                      formulario.onsubmit = validacion;  // Cuando el usuario haga click en el boton onsubmit, iniciará la validación. Si falla algún campo,  se detendrá y se le indicará al usuario que fallo.
                    }