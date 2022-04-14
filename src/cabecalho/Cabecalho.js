import './styles.scss'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Save, PaidOrders, TotalSpend, CreatedOrders } from '../shared/icon-set2';


const Cabecalho = () => {

    return (
        <div className="cabecalho-container">
            <section className="info">
                    <div className="title">524 - Savannah Nguyen</div>
                    <div className="breadcrumb-custom">Dashboard / Customer / <span className="highlight">524990</span></div>
            </section>
            <button type="button" className="btn-dark-custom"><Save /><span>Save</span></button>
        </div>
    )

}

export default Cabecalho
