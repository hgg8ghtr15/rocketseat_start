class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso;
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = "Infantil";
        }else if(this.peso <= 60){
            this.categoria = "Juvenil";
        }else {
            this.categoria = "Aduto";
        }
    }
}


class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = "Pluma";
        }else if(this.peso <= 60){
            this.categoria = "Leve";
        }else {
            this.categoria = "Pesado";
        }
    }

}

const atleta = new Atleta(35);
atleta.definirCategoria()
console.log(atleta)

const lutador = new Lutador(55);
lutador.definirCategoria()
console.log(lutador)

