/*
2- O IMC - indice de massa coporal é um critério  da organização mundial de saude para dar uma indicação sobre a condição de peso
mde uma pessoa adulta.

Formuça do IMC:
IMC = peso / (altura * altura)

Elabore um algortitmo que dado o pesso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/
//math é uma biblioteca matematica para auxiliar calculos
/*const peso = 90;
const altura = 1.80;
const imc = peso / Math.pow(altura,2) //peso / (altura * altura);
console.log(imc) 

if (imc < 18.5){
    console.log('Abaixo do Peso')
}else if (imc >= 18.5 && imc < 25){
    console.log('Peso normal')
}else if (imc >= 25 && imc < 30){
    console.log('Acima do peso')
}else if(imc >= 30 && imc < 40){
    console.log('Obeso')
}else{
    ('Obesidade Grave')
}
    */
// Abaixo vamos refatorar o codigo acima em funções.
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        console.log('Abaixo do Peso')
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso normal')
    } else if (imc >= 25 && imc < 30) {
        console.log('Acima do peso')
    } else if (imc >= 30 && imc < 40) {
        console.log('Obeso')
    } else {
        ('Obesidade Grave')
    }
}
function main() {
    const peso = 100;
    const altura = 1.80;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
