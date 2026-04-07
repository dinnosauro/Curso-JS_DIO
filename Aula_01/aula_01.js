/*
Faça um programa para calcular o valor de uma viagem.

Tem de ter 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distancia em KM da viagem;

Imprimir no console o valor que será gasto para realizar esta viagem
*/
//preço combustivel
const precoCombustivel = 5.70;
//consumo medio
const kmPorLitros = 10;
//distancia percorrida
const distanciaEmKm = 100;
//calculo litros consumidos
const litrosConsumidos = distanciaEmKm / kmPorLitros;
//calculo valor gasto
const valorGasto = litrosConsumidos * precoCombustivel;
//imprimindo no console
console.log(valorGasto.toFixed(2));