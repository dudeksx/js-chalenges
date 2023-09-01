const saldoAtual = parseFloat(gets(saldo));
const valorDeposito = parseFloat(gets(deposito));
const valorRetirada = parseFloat(gets(saque));

const saldoAtualizado = saldoAtual + (valorDeposito - valorRetirada);
//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.

print(calculaSaldo);
