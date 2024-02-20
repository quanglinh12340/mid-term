import React, { useState, useRef } from "react";
import { IoSendOutline } from "react-icons/io5";

const Input = ({ onSendMessage }) => {
  const inputRef = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      onSendMessage(inputValue);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="input">
      <form onSubmit={sendMessage}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message"
        />
        <button type="submit" className="sendMessage">
          Send
          <IoSendOutline />
        </button>
      </form>
    </div>
  );
};

export default Input;
