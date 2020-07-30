import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Header from '../components/Header';

function CadastroVideo() {
  return (
    <PageDefault>
      <Header>Cadastro de Vídeo</Header>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
