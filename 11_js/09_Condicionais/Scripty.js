let temperature = 37

let autaTemperatura = temperature >= 37.0
let normalTemperature = temperature >= 36.0 && temperature <= 36.9


if (autaTemperatura) {
    console.log(`A pessoa esta com febre`)
} else if (normalTemperature) {
    console.log(`A pessoa esta com Normal Temperature`)
}

console.log("-------------------")

function calculadora(numero1, operador, numero2) {
    let resultado
    switch (operador) {
        case "+":
            resultado = numero1 + numero2
            console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
            break
        case "-":
            resultado = numero1 - numero2
            console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
            break
        case "*":
            resultado = numero1 * numero2
            console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
            break
        case "/":
            resultado = numero1 / numero2
            console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
            break
        default:
            console.log(`Operação não cadastrada`)
    }
    return resultado
}

console.log(calculadora(10, "*", 10))

console.log("-------------------")

function errorFuncao(name){
    if (name === ""){
        throw ("Nome é necessário")
    }
}

let nome = ""
try {
    errorFuncao(nome)
} catch (e) {
    console.log(e)
}

