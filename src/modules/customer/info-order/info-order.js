import './styles.scss'
import React from 'react'
import { PaidOrders, TotalSpend, CreatedOrders } from '../../../shared/icon-set2';


const InfoOrder = () => {

    return (
        <div className="info-order">
            <div className="cube">
                <div className="title">Created Orders</div><CreatedOrders />
                <div className="info">104</div>
            </div>
            <div className="cube">
                <div className="title">Paid Orders</div><PaidOrders />
                <div className="info">80</div>
            </div>
            <div className="cube">
                <div className="title">Total Spend</div><TotalSpend />
                <div className="info">$ 2,420.80</div>
            </div>
        </div>
    )

}

export default InfoOrder
