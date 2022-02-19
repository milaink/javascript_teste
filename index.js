class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Camila";
cliente1.cpf = 12345678912;

const cliente2 = new Cliente();
cliente2.nome = "Joca";
cliente2.cpf = 13132154466;


const contaCorrenteCamila = new ContaCorrente();
contaCorrenteCamila.saldo = 0;
contaCorrenteCamila.agencia = 1001;


console.log(contaCorrenteCamila.saldo);
contaCorrenteCamila.saldo = 150;
console.log(contaCorrenteCamila.saldo);
contaCorrenteCamila.sacar(200);
console.log(contaCorrenteCamila.saldo);

console.log(cliente1);
console.log(cliente2);