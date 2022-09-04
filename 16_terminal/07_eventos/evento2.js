const {inherits} = require("util")
const {EventEmitter} = require("events")

function Character(nome){
    this.nome = nome   

}
inherits(Character, EventEmitter)

const chapoplin = new Character("chapoplin")

chapoplin.on("help", () => { 
    console.log(`Eu ${chapoplin.nome}, colorado!`)
 })

 console.log("Quem poderá me ajudar?")
 chapoplin.emit("help")