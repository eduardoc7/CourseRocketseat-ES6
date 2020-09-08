import axios from 'axios';

// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  console.log(delay() + '1s');

  console.log(delay() + '2s');
  
  console.log(delay() + '3s');
};
umPorSegundo();

// B
async function getUserFromGitHub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe!')
  }
}
getUserFromGitHub('eduardoc7');

// C
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("rocketseat/rocketseat.com.br");

// D
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);

    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};
buscaUsuario('eduardoc7');
