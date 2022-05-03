import "./styles.scss";
import React from "react";
import { Save } from "./icon-set2";
import { useNavigate } from "react-router-dom";

const Header = ({ text, nav, icon, title, dashboard, type, highlight }): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (nav) => {
    navigate(nav);
  };
  return (
    <div className="cabecalho-container">
      <section className="info">
        <div className="title">{title}</div>
        <div className="breadcrumb-custom">
          {dashboard} {type ? "/ " : ""}<span className="type">{type}</span> {highlight ? "/ " : ""}<span className="highlight">{highlight}</span>
        </div>
      </section>
      <button
        type="button"
        onClick={() => handleClick(nav)}
        className="btn-dark-custom"
      >
        {icon}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Header;