import React from "react";
import { FaUser } from "react-icons/fa";

export const Search = ({ onSearch, users }) => {
  return (
    <div className="search">
      <div className="searchForm">
        <FaUser className="icon" />
        <input
          type="text"
          placeholder="People, Group and Messages"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="userChat">
        {users.map(({ id, img, name }) => (
          <div className="userChat" key={id}>
            <img src={img} alt="profile-default" />
            <div className="userChatInfo">
              <span className="name">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
