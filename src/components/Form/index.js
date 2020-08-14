import React from 'react';
import './style.scss';

const Form = () => (
<form className="form">
  <input className="form-input" type="text" placeholder="Veuillez saisir un message..."></input>
  <button className="form-button" type="submit">&gt;</button>
</form>
);

export default Form;
 