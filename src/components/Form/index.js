import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

import './style.scss';

const Form = ({ send, inputValue, changeText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };
  const handleChange = (event) => {
    console.log('je veux changer la valeur du text, voici la nouvelle valeur:', event.target.value);
    changeText(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} value={inputValue} className="form-input" type="text" placeholder="Veuillez saisir un message..." />
      <button className="form-button" type="submit"><Send /></button>
    </form>
  );
};
Form.propTypes = {
  send: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};
export default Form;
