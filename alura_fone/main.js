const listaDeTeclas = document.querySelectorAll('input[type=button]');
const input = document.querySelector('input[type=tel]');


for (i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
    input.value = input.value + tecla.value;
  }
}