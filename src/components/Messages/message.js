import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, content, isAuthor }) => {
  // console.log('pseudo', pseudo);
  return (
    <div className={isAuthor ? 'message message--isAuthor' : 'message'}>
      <div className="message-author">{author}</div>
      <p className="message-content">{content}</p>
    </div>
  );
};
Message.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  isAuthor: PropTypes.string.isRequired,
};

Message.defaultProps = {
  author: 'anonyme',
};
export default Message;
