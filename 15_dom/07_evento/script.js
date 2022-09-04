function imprimir(){
    alert("Alerta")
}

const input = document.querySelector("input")
input.onkeydown = function(event){
    console.log(event.keyCode)
}

function salvar(event){
    alert("formulario salvo")
    console.log(event)

}

const button = document.querySelector(".button_teste")
button.addEventListener("click",salvar)


const button_teste2 = document.querySelector(".button_teste2")
button_teste2.addEventListener("click",salvar)

