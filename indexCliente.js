import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./conta/ContaCorrente.js";
import {ContaPoupanca} from "./conta/ContaPoupanca.js"
import {ContaSalario} from "./conta/ContaSalario.js";

////

const cliente1 = new Cliente("Cassia", 77788899900);

const conta1 = new ContaCorrente (cliente1, 1001);
conta1.depositar(800);
conta1.sacar(150);

const contaPoupanca = new ContaPoupanca(420, cliente1, 1001);
contaPoupanca.sacar(5);''



const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(120);
contaSalario.sacar(20);


console.log(conta1);
console.log(contaPoupanca);
console.log(contaSalario);

/*
const conta = new Conta(0, cliente1, 5555); erro de classe abstrata
*/

////