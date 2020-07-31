import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  return {
    values,
    clearForm,
    handleChange,
  };
}

export default useForm;
