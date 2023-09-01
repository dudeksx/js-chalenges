const valor = -1;

if (valor > 0) {
  console.log("Deposito realizado com sucesso! ");
  console.log("Saldo atual: R$ " + valor.toFixed(2));
} else if (valor < 0) {
  console.log("Valor invalido! Digite um valor maior que zero.");
} else {
  console.log("Encerrando o programa...");
}
