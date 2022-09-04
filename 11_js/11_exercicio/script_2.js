
function Conta(saldo){
    this.saldo = saldo;
    this.receita = [];
    this.despesa = [];

    this.adicionarReceita = (valor) => {
        this.receita.push(valor);
    }  

    this.adicionarDespesa = (valor) => {
        this.despesa.push(valor);
    }

    this.processar = (lista) => {
        let total = 0
        for (let item of lista) {
            total += item
        }
        return total
    }

    this.mostrarSaldo = () => {
        this.saldo = this.processar(this.receita) - this.processar(this.despesa)
        return `O saldo da Conta é ${this.saldo.toFixed(2)} R$` 
    }  
}

let conta1 = new Conta(0);

conta1.adicionarDespesa(50)
conta1.adicionarDespesa(10)
conta1.adicionarDespesa(10)
conta1.adicionarDespesa(10)

conta1.adicionarReceita(10)
conta1.adicionarReceita(10)
conta1.adicionarReceita(10)
conta1.adicionarReceita(10)
conta1.adicionarReceita(10)
conta1.adicionarReceita(10)

console.log(conta1.mostrarSaldo())

