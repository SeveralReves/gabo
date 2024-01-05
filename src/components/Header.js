// src/components/TodoItem.js
import React, { useState } from "react";
// import Logo from './assets/SVR-negro.png'
import SVRNegro from "../assets/SVR-blanco.png";
import "../styles/_header.scss";

const Header = ({}) => {
  const [menu, setMenu] = useState([
    { title: "Home", url: "#" },
    { title: "Info", url: "#" },
    { title: "Contact", url: "#" },
  ]);

  return (
    <header className="header">
      <div className="header__container container">
        <img src={SVRNegro} alt="Logo SeveralReves" className="logo" />
        <nav className="header__nav">
          <ul className="header__ul">
            {menu.map((item, index) => (
              <li className="header__li" key={index}>
                <a href={item.url} className="header__a">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
