class Queue {
    constructor() {
        this.data = [];
        
    }

    // entra
    enqueue(item){
        this.data.push(item);
        console.log(`O ${item} entrou na finla`)
    }
    
    // entra
    dequeue(){
        const item = this.data.shift();
        console.log(`O ${item} Saiu da fila`)
    }

    
}


const fila = new Queue()

fila.enqueue("Pedro")
fila.enqueue("Maria")
fila.enqueue("Joao")
fila.enqueue("Mauricio")

fila.dequeue()
