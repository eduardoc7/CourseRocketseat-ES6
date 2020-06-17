// Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    };
    isAdmin(){  
        console.log(this.test)
        return this.admin === true
    };
    testando(test){
        console.log(test)
    }
};

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha); // o super referencia o construtuctor da classe pai e irá executar exatamente as mesmas coisas
        this.test = 'test' // aqui podemos criar novas propriedades, após o super
        this.admin = true // o valor do admin no this é atribuido apenas nessa classe, tornando-o indefinido na classe pai, já que la nada foi atribuido 
    };
    mostrar(){
        console.log(this.email)
    }
};

const usuario = new Usuario('email@teste.com', 'senha123')
const admin = new Admin('email@teste.com', 'senha123')
console.log(usuario.isAdmin()) // false - porque a classe usuário não é capaz de enxergar o valor da propriedade atribuido no admin do constructor
console.log(admin.isAdmin()) // true