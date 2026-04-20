//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

/*Para cada arquivo da entrada, terá um arquivo de saída.
E como mencionado no Desafio, será gerado uma linha com a palavra "Reprovado"
caso sua média seja < 5, "Recuperação" 
caso sua média seja >= 5 e < 7 e "Aprovado" 
caso a média seja > 7. Use o exemplo abaixo para clarear o que está sendo pedido.

Entrada 	Saída
5.5 	    REC
8 	        APR
2 	        REP

*/
const { gets, print } = require('./Desafio_Auxiliar');

let media = gets();

if (media < 5) {
  print('Reprovado');
}else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}