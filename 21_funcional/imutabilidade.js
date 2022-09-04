const cart = {
    tamanho: 2
}

// Errado
cart.tamanho = 3
console.log(cart)

// Correta
const newCart = {
    tamanho: 3
}