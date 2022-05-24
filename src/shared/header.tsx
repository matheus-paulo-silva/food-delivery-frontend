import "./styles.scss";
import React from "react";
import { Save, Back } from "./icon-set2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ text, nav, icon, title, dashboard, type, highlight, pageUrl = null }): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (nav) => {
    navigate(nav);
  };
  return (
    <div className="cabecalho-container">
      <div className="header-left">
        {pageUrl &&
          <Link to={`/${pageUrl}`} className="">
            <Back />
          </Link>
        }
        <section className="info">
          <div className="title">{title}</div>
          <div className="breadcrumb-custom">
            {dashboard} {type ? "/ " : ""}<span className="type">{type}</span> {highlight ? "/ " : ""}<span className="highlight">{highlight}</span>
          </div>
        </section>
      </div>
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
