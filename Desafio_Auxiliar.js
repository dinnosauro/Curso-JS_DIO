// neste arquivo é colocado as funções que seram utilizados no exercicio

// aqui é o arrey onde estão os valores que seram utilizados pela varieavel entradas
const entradas = [5.5, 8, 2];
// aqui é a variavél mutavel que estamos utilizando 
let i = 0;
// aqui é a função que o getter ira utilizar para pegar os valores acima 
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}
// aqui é a função que o print utilizara
function print(texto){
    console.log(texto);
}

// aqui criamos o modulo de exportação de nossas funçoes 
module.exports = { gets, print};