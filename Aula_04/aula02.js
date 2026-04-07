/*
2- crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura;
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (alteura*altura));
Instancie uma pessoa chamado José que tenha 70 KG de peso e 1,75 de altura e peça a José para dizer o valor de seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularIMC() {
        return this.peso / (this.altura * this.altura)
    }
    classificarImc() {
        const imc = this.CalcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do Peso')
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal')
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso')
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso')
        } else {
            return('Obesidade Grave')
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
const rique = new Pessoa('Rique', 140, 1.80);

console.log(jose.classificarImc());
console.log(rique.classificarImc());