


function convercao(temperatura){
    let tipoTemperatura = temperatura.slice(-1)
    let temp =  temperatura.slice(0,-1)

    let resultado = 0
    if (tipoTemperatura === "c" || tipoTemperatura === "C"){
        resultado = (temp - 32) * 5/9
        return `O valor de ${tipoTemperatura} para F = ${resultado.toFixed(2)}` 

    } else if (tipoTemperatura === "f" || tipoTemperatura === "F"){
        resultado = temp * 5/9 + 32
        return `O valor de ${tipoTemperatura} para C = ${resultado.toFixed(2)}` 
    }
    return resultado
}

console.log(convercao("10C"))

function convercao2(temperatura){
    const celsus = temperatura.toUpperCase().includes("C")
    const fahre = temperatura.toUpperCase().includes("F")
    let temp = temperatura.slice(0,-1)

    let resultado = 0
    if (celsus){
        resultado = (temp - 32) * 5/9
        return `O valor de ${celsus} para ${fahre} = ${resultado.toFixed(2)}` 

    } else if (fahre){
        resultado = temp * 5/9 + 32
        return `O valor de ${fahre} para ${celsus} = ${resultado.toFixed(2)}` 
    }
    return resultado
}

console.log(convercao2("10C"))