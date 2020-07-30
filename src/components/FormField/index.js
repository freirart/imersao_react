import React from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  if (type.toLowerCase() === 'textarea') {
    return (
      <div className="inputBox w100">
        <label htmlFor={fieldId}>
          <textarea name={name} id={fieldId} value={value} onChange={onChange} required />
          <span>{label}</span>
        </label>
      </div>
    );
  }

  return (
    <div className="inputBox w50">
      <label htmlFor={fieldId}>
        <input type={type} id={fieldId} name={name} value={value} onChange={onChange} required />
        <span>{label}</span>
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
