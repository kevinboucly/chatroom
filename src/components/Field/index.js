import React from 'react';
import PropTypes from 'prop-types';

const Field = ({type, placeholder}) => (
  <input type={type} placeholder={placeholder} />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
Field.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default Field;
