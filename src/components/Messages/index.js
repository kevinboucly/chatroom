import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import './style.scss';

const Messages = ({ messages }) => (
  <div className="messages"> 
   {messages.map((message) => (
    <Message key={message.id} {...message} />
   ))}
    
  </div>
);
Messages.propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired 
  }
export default Messages;
