import React from "react";
import Navbar from "../components/navbar";
import "./main.scss";
import cycle from "../assets/icons/Group 9.svg";
import calendar from "../assets/icons/Group 10.png";
import image from "../assets/icons/Group 11.png";
import chart from "../assets/icons/Group 12.png";

function MainPage() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="container container-w">
          <div className="description-box">
            <p className="title">
              Сервис прогнозирование потребности препаратов
            </p>
            <p className="description">
              Прогнозирование потребности на препараты, между производителями,
              дистебьюторами, гос закупом и гос датации для предзаказа.
            </p>
            <button>Зарегистрироваться</button>
          </div>
        </div>
        <div className="container">
          <div className="card-box-wrapper">
            <div className="card-box">
              <img src={cycle} alt="" />
              <p>Обмен данными между производителями</p>
            </div>
            <div className="card-box">
              <img src={calendar} alt="" />
              <p>Планировщик гос. закупок</p>
            </div>
            <div className="card-box">
              <img src={image} alt="" />
              <p>Планирование производства</p>
            </div>
            <div className="card-box">
              <img src={chart} alt="" />
              <p> Аналитика потребности</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
