/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Header from '../components/Header';
import {
  W50, BtnCadastrar, BtnBox, BtnLimpar,
} from './styles';
import './Categoria.css';
import ColorExample from './components/ColorExample';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#242423',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleBtnClick() {
    setValues(initialValues);
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    /*
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://freirart.herokuapp.com/categorias'; */

    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (promise) => {
      const resposta = await promise.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>

      <Header>Cadastro de Categorias</Header>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, values]);
        setValues(initialValues);
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
          <BtnLimpar onClick={handleBtnClick}>Limpar</BtnLimpar>
        </BtnBox>
      </form>

      {/* <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
        </ul> */}

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Descrição</th>
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
                  {descricao.map((media) => (
                    <li>{media}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </PageDefault>
  );
}

export default CadastroCategoria;
