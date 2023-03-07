import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

////

const cliente1 = new Cliente("Cassia", 77788899900);

const conta1 = new ContaCorrente (cliente1, 1001);
conta1.depositar(800);
conta1.sacar(150);

const contaPoupanca = new ContaPoupanca(420, cliente1, 1001);
contaPoupanca.sacar(5);''

console.log(conta1);
console.log(contaPoupanca);

////'