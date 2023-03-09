export class Cliente{

    get cpf() { 
        return this._cpf;    
    }

    constructor(nome, cpf){ 
        //atributos dentro de métodos é mais indicado
        this.nome = nome;
        this._cpf = cpf;
    }

    autenticar(){
        return true;
    }

}