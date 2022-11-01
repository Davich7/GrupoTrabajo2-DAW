window.onload = function () {

    submit.addEventListener("click", validarFormulario);

   
};

function validarFormulario() {
    //Comprobamos si se rellenan los campos con los datos del cliente
  if (nombre.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el nombre del cliente.')
    return false;
  }

  if (direccion.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir la direccion del cliente.')
    return false;
  }

  if (tel.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el telefono del cliente.')
    return false;
  }

  if (email.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el correo electronico del cliente.')
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