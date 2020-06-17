// arrow functions são muitas utilizadas no ecmascript
// uma expressão de função simplificada que facilita a leitura do código

const arr = [5, 2, 4, 6, 1, 9];

const newArr = arr.map(item => item * 2);
console.log(newArr)

const nome = arr.map(item => ({nome: 'Eduardo'}));
console.log(nome)

const teste = () => ({nome: 'Eduardo'});
console.log(teste())