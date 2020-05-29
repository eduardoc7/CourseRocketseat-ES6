// conceitos - classes
class List {
    constructor(){ // primeiro método a ser executado toda vez que instaciarmos a classe
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class todoList extends List{ // esta classe irá herdar as propriedades da classe List. Sendo então, uma classe filha 
    constructor(){ 
        super();
        
        this.usuario = 'Eduardo';
    }
    mostraUsuario(){
        console.log(this.usuario)
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos)
    }
}
const minhaLista = new todoList();

document.getElementById('novotodo').onclick = function() {
    minhaLista.addTodo();
}

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('um outro novo todo')
}

minhaLista.mostraUsuario()

// MÉTODO ESTÁTICOS 
    // utilizados como utilitários para retorna valores baseados nos paremetros passados a eles
    // executam a sua função independemente do restante da classe 
    // geralmente nem vai ter constructor 

class Matematica {
    static Soma(a, b){
        return a + b
    }
}
console.log(Matematica.Soma(1, 5))