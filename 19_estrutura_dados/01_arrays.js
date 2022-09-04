const pilotos = ["Sena", "Teste1", "Teste2", "Teste3", "Teste4", "Teste5"]

console.log( pilotos[1] )

for (const piloto of pilotos) {
    console.log( piloto)
}

for (const id in pilotos) {
    console.log(id)
}

const piloto = pilotos.find(piloto => piloto === "Sena")
console.log( `piloto encontrado = ${piloto}` )


