$(document).ready(function () {

  $(`#botonEnviar`).prop('disabled', true);

  const expresiones = {
    inputCodigo: /[a-zA-Z0-9]{2,50}$/,
    inputNombre: /^[A-Za-z\s]{4,50}$/,
    inputNota1: /[0-9]{2}$/,
    inputNota2: /[0-9]{2}$/,
    inputNota3: /[0-9]{2}$/,
    inputNota4: /[0-9]{2}$/
  };

  const campos = {
    inputCodigo: false,
    inputNombre: false,
    inputNota1: false,
    inputNota2: false,
    inputNota3: false,
    inputNota4: false
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test($(input).val())) {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = $(target).attr("name");

    switch (name) {
      case "inputCodigo":
        validarCampo(expresiones.inputCodigo, target, "inputCodigo");
        break;
      case "inputNombre":
        validarCampo(expresiones.inputNombre, target, "inputNombre");
        break;
      case "inputNota1":
        validarCampo(expresiones.inputNota1, target, "inputNota1");
        break;
      case "inputNota2":
        validarCampo(expresiones.inputNota2, target, "inputNota2");
        break;
      case "inputNota3":
        validarCampo(expresiones.inputNota3, target, "inputNota3");
        break;
      case "inputNota4":
        validarCampo(expresiones.inputNota4, target, "inputNota4");
        break; 
    }

    if (campos["inputCodigo"] && campos["inputNombre"] && campos["inputNota1"] && campos["inputNota2"] && campos["inputNota3"] && campos["inputNota4"]) {
      $(`#botonEnviar`).prop('disabled', false);
    }

  };

  $("#formulario input").on("blur", validarFormulario);

});
