// promise no js comum:
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(err => {

  });

// usando o async e await
// só podemos usar o await dentro de uma função async
// podemos também utilizar através de uma arrow function
async function executaPromise() {
  const response = await minhaPromise();

  console.log(await minhaPromise());
  console.log(response);
}

const executaPromise = async () => {
  console.log(minhaPromise());
}

executaPromise();