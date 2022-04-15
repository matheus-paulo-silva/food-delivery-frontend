import './styles.scss'
import React from 'react'
import { Save } from '../../../../shared/icon-set2';
import { useNavigate } from 'react-router-dom';


const Header = ({text, nav, icon}) => {
    const navigate = useNavigate();
    const handleClick = (nav) =>{
        navigate(nav)
    }
    return (
        <div className="cabecalho-container">
            <section className="info">
                <div className="title">524 - Savannah Nguyen</div>
                <div className="breadcrumb-custom">Dashboard / Customer / <span className="highlight">524990</span></div>
            </section>
            <button type="button" onClick={()=> handleClick(nav)} className="btn-dark-custom">{icon}<span>{text}</span></button>
        </div>
    )

}

export default Header


