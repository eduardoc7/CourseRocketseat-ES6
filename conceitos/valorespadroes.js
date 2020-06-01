// padrametros padroes ou parametros opcionais são utilizados quando nós queremos passar 
// apenas 1 parametro ou talvez nenhum para a função sem que isso gere uma mensagem de erro

//funcao padrao:
function soma(a = 0, b = 0){
    return a + b
};
console.log(soma(5, 5))

// arrow function
const soma2 = (a = 0, b = 0) => a + b;
console.log(soma2(10, 10))