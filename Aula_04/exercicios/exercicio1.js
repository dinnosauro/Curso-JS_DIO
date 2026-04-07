/* 

1- Faça um programa que recebba a média de um aluno.
caso a média seja < 5 imprima 'repovado'
caso a media seja >= 5 e <7 imprima 'recuperação'
caso a media seja >= 7 imprima 'aprovado'

exemplo:
Entrada:
5.5
saida:
recuperação

*/

const { gets, print } = require('./funcoes-auxiliares-ex1');

const media = gets();

if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}