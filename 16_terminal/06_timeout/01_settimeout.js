// depois de x ms
// setTimeout()
const timeOut = 5000
const finished = () => console.log("Done !")

setTimeout(finished, timeOut)

//cancela o time out
// clearTimeout()

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)


//setInterval()
const tempo = 1000
let duration = 0
const ping = () => {
    duration += tempo
    console.log(`Ping ${duration/1000}`)
}

//clearInterval()
const intervalo = setInterval(ping, tempo)

setTimeout(()=>{
    clearInterval(intervalo)
},10000)

