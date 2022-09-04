// Estrutural
let altura = 50
let largura = 50

function calculo() {
    return (altura + largura)
}

let area = calculo()

// Class

class Pologono {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    get area() {
        return this.#calculoArea()
    }

    #calculoArea() {
        return this.largura * this.altura
    }

}

const poligano = new Pologono(50, 50)

console.log(poligano.area)
