import api from './api';

// definindo uma classe para controlar toda a aplicação
class App {
  constructor() {
    // inicializando variáveis:
    this.repositories = [];

    // referenciando o elemento form no html
    this.formElement = document.getElementById('repo-form');
    this.listElement = document.getElementById('repo-list');
    this.inputElement = document.querySelector('input[name=repository]');

    this.registerHandlers();
  }

  // método para registrar os eventos:
  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  // método para mostrar o loading:
  setLoading(loading = true) {
    if (loading === true) {
      let loadingElement = document.createElement('span');
      loadingElement.appendChild(document.createTextNode('Carregando'));
      loadingElement.setAttribute('id', 'loading');

      this.formElement.appendChild(loadingElement);
    } else {
      document.getElementById('loading').remove();
    }
  }

  // método para adicionar repositórios no array
  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;

    if (repoInput.length === 0)
      return;

      this.setLoading();
    try {
      const response = await api.get(`/repos/${repoInput}`);
      
      console.log(response);
      const { name, description, html_url, owner: { avatar_url } } = response.data;
  
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });
  
      this.inputElement.value = '';
      this.render();
    } catch (err) {
      alert('Repositório não encontrado!')
    }

    this.setLoading(false);
  }

  // método para renderizar na tela a lista:
  render() {
    this.listElement.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', repo.avatar_url);

      let titleElement = document.createElement('strong');
      titleElement.appendChild(document.createTextNode(repo.name));
      
      let descriptionElement = document.createElement('p');
      descriptionElement.appendChild(document.createTextNode(repo.description));
    
      let linkElement = document.createElement('a');
      linkElement.setAttribute('target', '_blank');
      linkElement.setAttribute('href', repo.html_url);
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