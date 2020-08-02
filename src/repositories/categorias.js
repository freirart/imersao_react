import URL_BACKEND from '../config';

const URL_CATEGORIAS_VIDEOS = `${URL_BACKEND}/categorias/?_embed=videos`;
const URL_CATEGORIAS = `${URL_BACKEND}/categorias/`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIAS_VIDEOS)
    .then(async (promise) => {
      if (promise.ok) {
        const resposta = await promise.json();
        return resposta;
      }

      throw new Error('Não foi possível carregar os dados :(');
    });
}

function getAll() {
  return fetch(URL_CATEGORIAS)
    .then(async (promise) => {
      if (promise.ok) {
        const resposta = await promise.json();
        return resposta;
      }

      throw new Error('Não foi possível carregar os dados :(');
    });
}

function create(categoriaObj) {
  return fetch(URL_CATEGORIAS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoriaObj),
  })
    .then(async (promise) => {
      if (promise.ok) {
        const resposta = await promise.json();
        return resposta;
      }

      throw new Error('Não foi possível carregar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
