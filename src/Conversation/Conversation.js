import React, { PropTypes } from 'react';
import Messages from '../Messages/Messages';

const Conversation = ({messages}) => {
  return (
    <div>
      <Messages messages={messages} />
    </div>
  );
};

Conversation.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      backColor: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Conversation;
