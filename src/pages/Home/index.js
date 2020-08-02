import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (

    <>
      <PageDefault backG="#070707" paddingAll="0">

        {dadosIniciais.length === 0 && (
        <div align="center" style={{ paddingAll: '5% 0' }}>
          <ReactLoading type="spinningBubbles" color="#fff" />
        </div>
        )}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

      </PageDefault>
    </>
  );
}

export default Home;
