import React, { useState } from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import user from "../assets/user/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logoSpotify} alt="Spotify Logo" />
      </a>

      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <a href="" className="premium">
        Premium
      </a>

      <a href="" className="user">
        <img src={user} alt="User" />
      </a>
    </div>
  );
};

export default Header;
