//Classe Abstrata -> não pode ser instanciada, apenas herdada

export class Conta{

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){ //erro para não alterar nada do objeto CONTA
            throw new Error("Você não deveria instanciar um objeto do tipo conta, pois é uma classe abstrata!")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    } 

    sacar(valor) { //metodo sobrescrito -> não é para ser chamado diretamente
        throw new Error ("O método sacar da classe Conta é abstrato!")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}