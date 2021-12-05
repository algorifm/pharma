import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <a href="/">Тарифы</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Блог</a>
          </li>
          <li>
            <a href="/">Аналитика</a>
          </li>
        </ul>
        <div className="lang">Рус</div>
        <div className="login">Войти</div>
      </div>
    </nav>
  );
}

export default Navbar;
