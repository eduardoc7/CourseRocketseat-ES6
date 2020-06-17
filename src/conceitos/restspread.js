// SPREAD
// spread, escrito com reticências ..., permite distribuir o conteúdo de 
// qualquer objeto iterável em múltiplos elementos.
const arr1 = [5, 2, 1];
const arr2 = [3, 4, 6];
const arr3 = [...arr1, ...arr2]
console.log(arr3)

// alterando o conteudo de um objeto
const usuarios = {
    nome: 'Eduardo',
    idade: 20
}
console.log(usuarios)
// '...usuarios', irá copiar todo o objeto de usuarios
// e após isso sobrepondo a propriedade do objetivo que queremos mudar
// ja que um objeto nao pode ter duas propriedades iguais 
const teste = { ...usuarios, nome: 'TESTING', idade: 45 } 
console.log(teste)

// REST
// o resto é uma variável do operador spread, também escrito em reticências
// faz o oposto que o spread
// irá nos retornar o resto das propriedades
const usuario = {
    nome: 'Eduardo', 
    idade: 20,
    cidade: 'Curitiba'
}
// pegamos apenas o conteudo de nome e o resto jogamos dentro da variável resto
const { nome, ...resto } = usuario
console.log(nome, resto)

// usando o rest em arrays com a desestruturação
const arr = [1, 2, 3, 4]
const [ a, b, ...c ] = arr;
console.log(a)
console.log(b)
console.log(c)

// usando o rest em funções
// uma função com multiplos parametros 
function soma(...params){
    return params.reduce((total, next) => total + next)
}

console.log(soma(4, 5, 6, 8))