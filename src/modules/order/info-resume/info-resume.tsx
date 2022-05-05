import "./styles.scss";
import React from "react";
import {
  Order,
  AccountOff,
  Trucker,
} from "../../../shared/icon-set2";
import Tracking from "../components/tracking";

const InfoResume = (): JSX.Element => {
  return (
    <div className="info-resume">
      <div className="cube">
        <div className="title">Customer Information</div>
        <AccountOff />
        <div className="d-grid">
          <p>Savannah Nguyen</p>
          <div>
            <label>Email: </label>
            <span> mah.t1998@Hotmail.com</span>
          </div>
          <div>
            <label>Phone: </label>
            <span> 11 996816994</span>
          </div>
        </div>
      </div>
      <div className="cube grey">
        <div className="title">Shipping Adress</div>
        <Order />
        <div>
          <label>Apartment</label>
          <label>Happy Land, Ctwon, 12 Guild Street, London, United Kingdom</label>
        </div>
      </div>
      <div className="cube">
        <div className="title">Track Orders</div>
        <Trucker />
        <div className="">
          <span>View Details</span>
          <Tracking />
          </div>
      </div>
    </div>
  );
};

export default InfoResume;
