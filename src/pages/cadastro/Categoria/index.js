/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Header from '../components/Header';
import W50 from '../components/W50';
import BtnCadastrar from '../components/BtnCadastrar';
import BtnLimpar from '../components/BtnLimpar';
import BtnBox from '../components/BtnBox';
import './Categoria.css';
import ColorExample from './components/ColorExample';
import BtnUpDel from '../components/BtnUpDel';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();

  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#242423',
  };

  const [categorias, setCategorias] = useState([]);

  const { values, clearForm, handleChange } = useForm(initialValues);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categories) => {
        setCategorias(categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function listDescriptionAsList(description) {
    return (description.map((media) => (
      <li key={`${media}`}>
        {media}
      </li>
    )));
  }

  function isAnObject(description) {
    return typeof description === 'object';
  }

  function listDescription(description) {
    if (isAnObject(description)) return listDescriptionAsList(description);
    return description;
  }

  return (
    <PageDefault paddingAll="5% 10%">

      <Header>Cadastro de Categorias</Header>

      <form onSubmit={(e) => {
        e.preventDefault();
        // setCategorias([...categorias, values]);
        categoriasRepository.create({
          nome: values.nome,
          descricao: values.descricao.split('\n'),
          cor: values.cor,
        })
          .then(() => {
            history.push('/cadastro/categoria');
          });
        clearForm(initialValues);
      }}
      >
        <W50>
          <FormField
            label="Nome da Categoria"
            type="Text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </W50>
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <BtnBox>
          <BtnCadastrar>Cadastrar</BtnCadastrar>
          <BtnLimpar onClick={clearForm}>Limpar</BtnLimpar>
        </BtnBox>
      </form>

      {categorias.length === 0 && (
        <div align="center">
          <ReactLoading type="spinningBubbles" color="#242423" />
        </div>
      )}

      { categorias.length >= 1 && (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(({
            id, nome, descricao, cor,
          }) => (
            <tr key={id}>
              <td>
                {nome}
              </td>
              <td className="celulaCor">
                <ColorExample style={{ background: cor }} />
                {cor}
              </td>
              <td>
                <ul>
                  {listDescription(descricao)}
                </ul>
              </td>
              <td className="btnUD">
                <BtnUpDel style={{ background: 'blue' }}><i className="fas fa-edit" /></BtnUpDel>
              </td>
              <td className="btnUD">
                <BtnUpDel style={{ background: 'red', paddingRight: '12px', paddingLeft: '12px' }}><i className="fas fa-trash-alt" /></BtnUpDel>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

    </PageDefault>
  );
}

export default CadastroCategoria;
