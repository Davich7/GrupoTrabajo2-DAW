window.onload = function () {
  submit.addEventListener("click", validacion);
}

function validacion(event) {

  //Comprobamos si se rellenan los campos con los datos del cliente
  if (dni.value.trim() == "") {
    alert ('Debe de escribir el DNI.')
    return false;
  }

  if (nombre.value.trim() == "") {
    alert ('Debe de escribir el nombre del cliente.')
    return false;
  }

  if (apellidos.value.trim() == "") {
    alert ('Debe de escribir al menos un apellido del cliente.')
    return false;
  }

  if (telefono.value.trim() == "") {
    alert ('Debe de escribir un número de telefono.')
    return false;
  }

  if (email.value.trim() == "") {
    alert ('Debe de escribir un correo electrónico')
    return false;
  }

  //Expresiones para validar los campos del formulario
  reNombre = /^[A-Z][A-z]+$/
  if(!nombre.value.match(reNombre)) {
    alert ('¡¡¡ERROR!!! Formato del nombre incorrecto.')
    return false;
  }

  reTelefono = /^\d{9}$/
  if (!telefono.value.match(reTelefono)) {
    alert ('¡¡¡ERROR!!! Formato del telefono incorrecto.')
    return false;
  }

  reEmail = /^(.+\@.+\..+)$/
  if (!email.value.match(reEmail)) {
    alert ('¡¡¡ERROR!!! Formato del correo electronico incorrecto.')
    return false;
  }
}

formulario.onsubmit = validacion;