const listaDeTeclas = document.querySelectorAll('input[type=button]');
const input = document.querySelector('input[type=tel]');


for (let i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
    input.value = input.value + tecla.value;
    
  }

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }




  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}