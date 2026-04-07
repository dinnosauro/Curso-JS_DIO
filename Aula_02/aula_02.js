//boolean são usados para verdadeiro e falso

const precoEtanol = 5.70;
const precoGasolina = 6.54;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol'; //se alterar aqui para Gasolina por exemplo ele vai calcular o valor da gasolina deviso ao booleano
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else { //no else não se utiliza () pois não se tem consições
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2)); //outra curiosidade o console com a variavel tem de ficar junto pq se nao ele nao é reconhecido devido a sintaxe da linguagem
}
