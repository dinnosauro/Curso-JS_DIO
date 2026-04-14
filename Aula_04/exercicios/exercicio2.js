/*
2- faça um programa que receba N (quantidade de numeros) e seus respectivos valores
imprima o maior numero par eo menor impar

exemplo:
entrada:
5
3
4
1
10
8

saida:
maior numero par :10
menor numero impar :1

*/

const { gets, print } = require('./funcoes-auxiliares-ex2');
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
const n = gets();

for (let i = 0; i < n; i++) {

    const numero = gets();

    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    }else {
        if (menorNumeroImpar === 0){
            menorNumeroImpar = numero;
        }
    }

}