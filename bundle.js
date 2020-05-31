"use strict";

// o es contém algumas funções internas para facilitar as operações em arrays
// no js antigo, isso era feito com for e muitas vezes precisando importar bibliotecas
var arr = [5, 6, 7, 8, 4, 2]; // map é uma função utilizada pra percorrer dentro do array
// retornando o valor e o indice desse valor

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // reduce é uma função utilizada pra retornar uma única variável de todo o array
// os parametros passados são: o valor atual e o proximo
// somando todos os números e colocando em uma variável:

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // filter é uma função utilizada pra filtrar o que quisermos e marcar isso como falso, ou seja, nao mostrando 
// ele irá retornar apenas os valores que se encaixam na condição, os que não se encaixam serão descartados

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // find é uma função utilizada pra percorrer dentro do array e verificar se esse valor existe dentro do array
// retornando exatamente o valor que definido na condição 

var find = arr.find(function (item) {
  return item === 5;
});
console.log(find);
