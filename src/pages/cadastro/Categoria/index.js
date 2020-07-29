import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Header from '../components/Header';
import './Categoria.css';

function CadastroCategoria(){
    const initialValues = {
        nome: '',
        descricao: '',
        cor: '#242423'
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleBtnClick(){
        setValues(initialValues);
    }

    function handleChange(e){
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    }
    
    return(
        <PageDefault>
            
            <Header header="Cadastro de Categorias" />

                <form onSubmit={(e) => {
                    e.preventDefault();
                    setCategorias([...categorias, values]);
                    setValues(initialValues);
                }}>
                <div className="inputSection">
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
                </div>
                    <FormField
                        label="Descrição"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                    />
                <div className="btnBox">
                 <button className="btn">Cadastrar</button>
                 <button className="btnLimpar" onClick={handleBtnClick}>Limpar</button>
                </div>
                </form>


                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cor</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Filmes</td>
                            <td>#fff</td>
                            <td>lalala</td>
                        </tr>
                    </tbody>
                </table>

                <ul>
                    
                </ul>

        </PageDefault>
    );
}

export default CadastroCategoria;