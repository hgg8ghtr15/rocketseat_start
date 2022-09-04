
let number = 2

// stateFull
function square() {
    return number * number
}
number = square()


// stateLess
const square = n => n * n
