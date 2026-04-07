/*
1- Criar uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto de combustivel por km rodado.
Crie um metodo que dado a quantodade de km e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    CalcularGastoDePercurso(distanciaEmKm, precoCombustivel,) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 1 / 12);

console.log(uno.CalcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1 / 10);

console.log(palio.CalcularGastoDePercurso(70, 5));