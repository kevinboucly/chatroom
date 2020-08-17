import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ send }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="form-input" type="text" placeholder="Veuillez saisir un message..." />
      <button className="form-button" type="submit">&gt;</button>
    </form>
  );
};
Form.propTypes = {
  send: PropTypes.func.isRequired,
};
export default Form;
