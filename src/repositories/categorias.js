import URL_BACKEND from '../config';

const URL_CATEGORIAS_VIDEOS = `${URL_BACKEND}/categorias/?_embed=videos`;

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

export default {
  getAllWithVideos,
};
