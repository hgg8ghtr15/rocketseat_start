const { EventEmitter } = require("events")

const ev = new EventEmitter()
console.log(ev)


ev.on("SaySomething", (mesnsagem) => {
    console.log(mesnsagem)
})

ev.once("SaySomething", (mesnsagem) => {
    console.log(mesnsagem)
})


ev.emit("SaySomething", "oi Meu nome é fabio")
ev.emit("SaySomething", "oi Meu nome é fabio")
