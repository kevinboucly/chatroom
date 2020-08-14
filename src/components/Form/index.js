import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({sendMessage} ) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };
  return (
<form onSubmit={handleSubmit} className="form">
  <input className="form-input" type="text" placeholder="Veuillez saisir un message..."></input>
  <button className="form-button" type="submit">&gt;</button>
</form>
  );
}
Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
}
export default Form;
 