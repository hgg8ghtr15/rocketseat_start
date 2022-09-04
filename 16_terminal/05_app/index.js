// process.stdout.write('alguma coisa \n\n\n');
const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu podedia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quandas pessoas ajudei hoje?"
]

const ask = ( index = 0 ) => {
  process.stdout.write(" \n\n" + questions[index] + ' > ')
}

ask()

const respostas = []

process.stdin.on("data", (data) => {
  // process.stdout.write(data.toString().trim() +'\n')
  respostas.push(data.toString().trim())
  if(respostas.length < questions.length) {
    ask(respostas.length)
  }else{
    console.log(respostas)
    process.exit()
  }
  // mata o proceso
  // process.exit()
})


process.on('exit', ()=>{
  console.log(`
  O que aprendi hoje?
  ${respostas[0]}
  
  O que me deixou aborrecido?
  ${respostas[1]}
  
  O que eu podedia fazer para melhorar?
  ${respostas[2]}
  
  O que me deixou feliz hoje?
  ${respostas[3]}
  
  Quandas pessoas ajudei hoje?
  ${respostas[4]}

  `)
})