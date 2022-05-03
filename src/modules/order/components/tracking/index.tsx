import './styles.scss'

import { TotalSpend } from "../../../../shared/icon-set2";

const Tracking = () => {
    return (
        <div className="tracking-block">
            <div className="tracking-items">
                <div className="icon-order custom-progress"><TotalSpend /></div>
                <div className="icon-pickup custom-progress"><TotalSpend /></div>
                <div className="icon-payment custom-progress active"><TotalSpend /></div>
                <div className="icon-done custom-progress "><TotalSpend /></div>
                <div className="sep-start"></div>
                <div className="sep-end"></div>
                <div className="sep"></div>
                <small className="text-order">Order</small>
                <small className="text-pickup">Pickup Time</small>
                <small className="text-payment">Payment</small>
                <small className="text-done">Done</small>
            </div>
        </div>
    )
}

export default Tracking