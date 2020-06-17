// constantes e variáveis de escopos (também conhecidas como variáveis locais)
// uma constante não poderá ter o seu valor reatribuido
// porém uma constante com um objeto, nós podemos alterar o conteúdo do objeto (conhecido como mutação) 
const test = { nome: 'Eduardo' }
test.nome = 'Eduardo'
console.log(test.nome)

// let - variável de escopo no javascript
// é uma variável que será utilizada apenas no escopo local, ou seja, no bloco de instrução local de uma função por exemplo
// fora dessa função a variável não existe
function test2(x){
    let y = 2
    
    if (x > y){
        let y = 4
    }
}