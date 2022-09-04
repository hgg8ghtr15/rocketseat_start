const header = document.querySelector("header")

const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
h1.textContent = "Hello World!"
h2.textContent = "Hello World h2 depois!"

header.prepend(h1)
header.append(h2)



const body = document.querySelector("body")
const p3 = document.querySelector(".p3")

const p = document.createElement("p")
p.textContent = "Testo 2"

console.log(body)
body.insertBefore(p, p3)






