const random = (number, Math) => 
    Math.floor(Math.random() * number)

console.log(random(10,Math))


const factorial = x => {

    if(x === 0){
        return 1;
    }

    return x * factorial(x -1)
}

console.log(factorial(6))