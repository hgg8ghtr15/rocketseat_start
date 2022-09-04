

const inputNome = document.querySelector(".inputNome")
inputNome.value = "Fabio"

const headerSemId = document.querySelector("header")

console.log(headerSemId)
headerSemId.setAttribute("id", "headerComId")

const headerComId = document.querySelector("#headerComId")
console.log(headerComId.getAttribute('id'))


const h1_teste = document.querySelector("h1")
console.log(h1_teste)
h1_teste.removeAttribute("class")
console.log(h1_teste)


const body_elemento = document.querySelector("body")

body_elemento.style.backgroundColor = "#f9f3d3"
console.log(body_elemento.style.backgroundColor)

body_elemento.classList.add("active")
headerSemId.classList.remove("borda")
h1_teste.classList.toggle("borda")





