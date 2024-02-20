import React from "react";
import "./Styles/App.less";
import { Sidebar } from "./Components/Sidebar.jsx";
import { Chat } from "./Components/Chat.jsx";

const App = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;