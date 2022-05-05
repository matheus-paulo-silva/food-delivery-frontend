import './styles.scss'

import { Order, PickUpTime, Payment, Done } from "../../../../shared/icon-set2";

const Tracking = () => {
    return (
        <div className="tracking-block">
            <div className="tracking-items">
                <div className="icon-order"><Order /></div>
                <div className="icon-pickup "><PickUpTime /></div>
                <div className="icon-payment "><Payment /></div>
                <div className="icon-done custom-progress active"><Done /></div>
                {/*  <div className="sep-start"></div>
                <div className="sep-end"></div>
                <div className="sep"></div> */}
                <div className="status-tracking">
                    <div className="st-start"></div>
                    <div className="um cell"></div>
                    <div className="dois cell"></div>
                    <div className="tres cell"></div>
                    <div className="quatro cell"></div>
                    <div className="cinco cell"></div>
                    <div className="seis cell"></div>
                    <div className="st-end"></div>
                </div>
                <small className="text-order">Order</small>
                <small className="text-pickup">Pickup Time</small>
                <small className="text-payment">Payment</small>
                <small className="text-done">Done</small>
            </div>
        </div>
    )
}

export default Tracking