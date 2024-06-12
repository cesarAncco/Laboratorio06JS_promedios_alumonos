class Alumno {
  codigo;
  nombre;
  nota1;
  nota2;
  nota3;
  nota4;

  constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }

  promedio() {
    let promedio = (this.nota1 * (15/100)) + (this.nota2 * (20/100)) + (this.nota3 * (25/100)) + (this.nota4 * (40/100));
    return promedio;
  }

  condicion() {
    let mensaje = "";
    if (this.promedio() < 12) {
      mensaje = "Desaprobado";
    } else {
      mensaje = "Aprobado";
    }
    return mensaje;
  }

  obsequio() {
    if (17 < this.promedio()) {
      return true;
    } else {
      return false;
    }
  }
}

// const a1 = new Alumno(1, "Cesar Ancco", 17, 18, 19, 20);

// console.log(a1);
// console.log(a1.promedio());
// console.log(a1.condicion());
// console.log(a1.obsequio());

$(document).ready(function(){
  $('#formulario').submit(function(e){
    e.preventDefault();
    const alumno = new Alumno(
      $('#inputCodigo').val(), 
      $('#inputNombre').val(), 
      $('#inputNota1').val(),
      $('#inputNota2').val(),
      $('#inputNota3').val(),
      $('#inputNota4').val()
    )

    mochila_tarjeta(alumno.promedio(), alumno.condicion(), alumno.obsequio());

  })
})

function mochila_tarjeta(promedio, condicion, obsequio) {
  let mochilaTarjeta = $("#mensaje-mochila");
  let newDiv = $("<div>").addClass("cart-item");

  let img = '';

  if (obsequio) {
    img = '/img/mochila.jfif';
  } else {
    img = '/img/sinMochila.jfif';
  }

  let cardContent = `
    <div class="card">
        <img src="${img}" class="card-img-top" alt="mochila" />
        <div class="card-body">
            <p class="card-text">Promedio:  ${promedio}</p>
            <p class="card-text">Estado:  ${condicion}</p>
        </div>
    </div>
  `;

  newDiv.html(cardContent);

  mochilaTarjeta.append(newDiv);

}