import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Camila";
cliente1.cpf = 12345678912;

const cliente2 = new Cliente();
cliente2.nome = "Joca";
cliente2.cpf = 13132154466;


const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

let valor = 200;
conta1.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2);