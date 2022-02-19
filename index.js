import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Camila";
cliente1.cpf = 12345678912;

const cliente2 = new Cliente();
cliente2.nome = "Joca";
cliente2.cpf = 13132154466;


const contaCorrenteCamila = new ContaCorrente();
contaCorrenteCamila.agencia = 1001;

contaCorrenteCamila.depositar(250);
contaCorrenteCamila.depositar(250);
contaCorrenteCamila.depositar(250);

const valorSacado = contaCorrenteCamila.sacar(200);

console.log(valorSacado);
console.log(contaCorrenteCamila);