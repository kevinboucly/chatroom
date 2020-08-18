import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({ type, placeholder, value, name }) => (
  <input name={name} value={value} className="field" type={type} placeholder={placeholder} />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Field.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default Field;
