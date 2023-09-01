//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.const ativos = [];

// Entrada da quantidade de ativos
const ativos = [];

// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(gets());

// Entrada dos tipos de ativos
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = gets();
  ativos.push(codigoAtivo);
}

// Ordenar os ativos em ordem alfabética
ativos.sort();

// Imprimir a lista de ativos ordenada
for (const ativo of ativos) {
  console.log(ativo);
}

//TODO: Ordenar os ativos em ordem alfabética.

//TODO: Imprimir a lista de ativos ordenada, conforme a tabela de exemplos.
