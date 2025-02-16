var myButton = document.getElementById("meuBotao");

// se receber clique, debitar para a consola o objeto `event`
myButton.onclick = function(event) {
  console.log(event);
}

// disparar o clique manual (vai ser o primeiro a aparecer na consola)
myButton.click();
<button id="meuBotao">clica-me</button>

if (e.screenX && e.screenX!=0 && e.screenY && e.screenY!=0) {
  // clique real, realizado por um humano ou um robô que usa o rato
}
else {
  // clique programático
}