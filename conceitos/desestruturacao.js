// desestruturação de objetos é um conceito bastante utilizado do es6+ 
// ja que facilita muito esse procedimento, eliminando linhas códigos
const usuario = {
    nome: 'Eduardo', 
    idade: 20, 
    endereco: {
        cidade: 'Curitiba',
        estado: 'Paraná'
    }
}

// basta informar no lado direito o nome dos campos dentro das chaves que eu pretendo pegar
const { nome, idade, endereco: { cidade, estado } } = usuario;
console.log(nome, idade)
console.log(cidade, estado)

// desestruturação como parametros de uma função
function teste({ nome, idade, endereco }){
    console.log(nome, idade, endereco)
};

teste(usuario)
