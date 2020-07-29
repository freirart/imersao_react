import React from 'react';
import './FormField.css';

function FormField({label, type, name, value, onChange}){

    if(type.toLowerCase() === 'textarea'){
        return (
            <div className="inputBox w100">
                <label>
                    <textarea name={name} value={value} onChange={onChange} required ></textarea>
                    <span>{label}</span>
                </label>
            </div>
        );
    }

    return(
        <div className="inputBox w50">
            <label>
                <input type={type} name={name} value={value} onChange={onChange} required />
                <span>{label}</span>
            </label>
        </div>
    );
}

export default FormField;