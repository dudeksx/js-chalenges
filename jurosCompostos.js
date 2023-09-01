//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
for (let i = 0; i < periodo; i++) {
  valorFinal *= 1 + taxaJuros; // Aumentar o valorFinal com juros compostos a cada iteração
}

print("Valor final do investimento: R$", valorFinal.toFixed(2));
