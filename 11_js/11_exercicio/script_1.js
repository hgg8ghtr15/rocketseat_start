

function converterNota(nota){
    let resultado
    console.log(nota)

    if(nota >= 90){
        resultado = "A"
    }else if(nota >= 80 &&  nota <= 89){
        resultado = "B"
    }else if(nota >= 70 &&  nota <= 79){
        resultado = "C"
    }else if(nota >= 60 &&  nota <= 69){
        resultado = "D"
    }else if(nota <= 59){
        resultado = "F"
    }
    return resultado
}


console.log(converterNota(100))
console.log(converterNota(85))
console.log(converterNota(75))
console.log(converterNota(65))
console.log(converterNota(55))
