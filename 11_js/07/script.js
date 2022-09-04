let letras = "Fabio"

let numeros = 123

console.log(typeof(letras))
console.log(typeof(numeros))

let numeros2 = String(numeros)
console.log(typeof(numeros2))

console.log(letras.length)

console.log(numeros.toFixed(2).replace(".", ","))

let frase  = "Meu nome é fabio"

console.log(frase.includes("nome"))

let myarray = frase.split(" ")
console.log(myarray)

let fraseConcatenada = myarray.join("_")
console.log(fraseConcatenada)

let convercao = Array.from(frase)
console.log(convercao)

let tecnologas = ["html", "CSS", "JS"]
console.log("----------")
console.log(tecnologas.push("Java"))
console.log(tecnologas)
console.log("--UN--------")
console.log(tecnologas.unshift("SQL"))
console.log(tecnologas)
console.log("--pop--------")
console.log(tecnologas.pop())
console.log(tecnologas)
console.log("--sh--------")
console.log(tecnologas.shift())
console.log(tecnologas)
console.log("--sl--------")
console.log(tecnologas.slice(1,2))
console.log(tecnologas)
console.log("--spli--------")
console.log(tecnologas.indexOf("java"))
console.log(tecnologas.splice(tecnologas.indexOf("java")-1, 1))
console.log(tecnologas)

