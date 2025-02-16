btn1.addEventListener('click', mudaCor);
btn2.addEventListener('mouseover', mudaAparTodos);

function mudaCor() {
    document.getElementById("cubo1").style.backgroundColor = "yellow";
}

function mudaAparTodos() {
var elementos = document.getElementsByTagName("div");
  for (i = 0; i < elementos.length; i++) {
     elementos[i].style.borderWidth = "2px";
     elementos[i].style.borderColor = "black";
     elementos[i].style.borderStyle = "solid";
    }
}