import {Cliente} from "./Cliente.js";
import {Gerente} from "./funcionarios/Gerente.js";
import {Diretor} from "./funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente = new Cliente("Julia", 44466699988, "2546")

const diretor =  new Diretor("Amanda", 9000, 99988855566);
diretor.cadastrarSenha("1234abcd");

const gerente =  new Gerente("Flávia", 4500, 77755533322);
gerente.cadastrarSenha("acb123");

const clienteLogado = SistemaAutenticacao.login(cliente, "2546")
const diretorLogado = SistemaAutenticacao.login(diretor, "1234abcd");
const gerenteLogado = SistemaAutenticacao.login(gerente, "abcd1234");

console.log(clienteLogado, diretorLogado, gerenteLogado);
