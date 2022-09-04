for (let i = 0; i <= 10; i++) {
    if (i == 9) {
        break
    }
    console.log(i)
}

console.log("----------")
let cont = 0
while (cont < 10){
    console.log(cont)
    cont += 1
}

console.log("----------")

let frutas = ["maça", "pera", "uva"]
let nome = "Fabio Lucas Marconi"


for (const fruta of frutas) {
    console.log(fruta)
}

for (const caracter of nome) {
    console.log(caracter)
}


console.log("----------")
let pessoa = {
    nome: "Fabio",
    sobrenome: "Lucas"
}

for(let atributo in pessoa) {
    console.log(`Nome do chave = ${atributo}, valor = ${pessoa[atributo]}`)
}
