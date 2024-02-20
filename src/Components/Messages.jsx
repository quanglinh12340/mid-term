import React from "react";
import Message from "./Message";

const Messages = ({ messageList }) => {
  return (
    <div className="messages">
      {messageList.map(({ id, text, timestamp }) => (
        <Message key={id} text={text} timestamp={timestamp} />
      ))}
    </div>
  );
};

export default Messages;
