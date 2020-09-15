// definindo uma classe para controlar toda a aplicação
class App {
  constructor() {
    // inicializando variáveis:
    this.repositories = [];

    // referenciando o elemento form no html
    this.formElement = document.getElementById('repo-form');
    this.listElement = document.getElementById('repo-list');

    this.registerHandlers();
  }

  // método para registrar os eventos:
  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  // método para adicionar repositórios no array
  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: 'nome',
      description: 'descrição',
      avatarURL: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      htmlURL: 'um link do sei la o que',
    });

    this.render();
  }

  render() {
    this.listElement.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', repo.avatarURL);

      let titleElement = document.createElement('strong');
      titleElement.appendChild(document.createTextNode(repo.name));
      
      let descriptionElement = document.createElement('p');
      descriptionElement.appendChild(document.createTextNode(repo.description));
    
      let linkElement = document.createElement('a');
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('href', repo.htmlURL);
      linkElement.appendChild(document.createTextNode('Acessar'));

      let listElement = document.createElement('li');
      listElement.appendChild(imgElement);
      listElement.appendChild(titleElement);
      listElement.appendChild(descriptionElement);
      listElement.appendChild(linkElement);

      this.listElement.appendChild(listElement);
    });
  }
}

new App();