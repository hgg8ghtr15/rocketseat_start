function criarFrase(){
    console.log("Frase A")
    console.log("Frase b")
    console.log("Frase c")

}

criarFrase()


let mensagem = function(num1, nun2, resultado){
    console.log(`A soma de ${num1} e ${nun2} = ${resultado}`)
}


const sum = function(numA, numB){
    const total = numA + numB
    return total
}

let soma = sum(10,10)

mensagem(10, 10, soma)


let numero1 = 10
let numero2 = 25

const sum2 = (numero1, numero2) => {
    return numero1 + numero2
}
let total = sum2(numero1, numero2)
console.log(total)


// Função onstrutoras

function Pessoa (nome){
    this.nome = nome
    this.andar = () => {
        return `O ${nome} esta andando`
    }
}

const fabio = new Pessoa("Fabio")


console.log(fabio.andar())


