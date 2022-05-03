import React, { useState } from "react";
import "./styles.scss";
import InfoResume from "../../info-resume/info-resume";
import Card from "../../../../shared/card";
import Header from "../../../../shared/header";
import { Save } from "../../../../shared/icon-set2";
import Image from "../../Image/Image";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import { Add } from "../../../../shared/icon-set2";

const OrderDetails = (): JSX.Element => {
  const [form, setForm] = useState({
    firstName: "",
    mi: "",
    lastName: "",
    email: "",
    phone: "",
    adress: "",
    adress2: "",
    zipCode: "",
    city: "",
    state: "",
    countryCode: "",
    password: "",
    dob: "",
    gender: "",
    building: "",
    apartament: "",
    tower: "",
    addnumb: "",
    street: "",
    nation: "",
    dateCreate: "",
  });
  const [selected, setSelected] = useState("");

  const onChange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  /*  const saveForm = () => {
    console.log(form);
    console.log(selected);
  }; */

  return (
    <div className="container">
      <Header
        icon={<Save />}
        nav={"/order"}
        text="Save"
        type={"order"}
        dashboard={"Dashboard"}
        highlight={"Orders"}
        title={"524990098"}
      />
      <Card>
        <section className="order-block">
          <div className="order-resume">
            <InfoResume />
          </div>
          <h1>Order Information</h1>
          <div className="table-block">
            <div className="w-100p h-80p d-flex fxd-c border-table">
              <div className="table-header peers jc-sb ">
                <div className="w-60p d-n@md-">
                  <span>Product</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Price</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Quantity</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Discount</span>
                </div>
                <div className="w-5p d-n@md-">
                  <span>SubTotal</span>
                </div>
                <div className="w-5p d-n@md-"></div>
              </div>
              <div
                className="ps psb h-100p w-100p table-content"
                style={{ border: "1px solid #ccc" }}
              >
                {[0, 1, 2, 3, 4, 5].map((item, idx) => (
                  <div key={idx} className="table-tr-order tb-hover peers jc-sb ai-c bdB">
                    <div className="w-5p d-flex ai-c jc-c">
                      <img className="image small" src="https://assets.unileversolutions.com/recipes-v2/230411.jpg?imwidth=800" />
                    </div>
                    <div className="w-55p d-grid">
                      <span>Macaroon cake filled with pineapple</span>
                      <span className="code-order">Code: 382749</span>
                      </div>
                    <div className="w-10p">$ 25.00 </div>
                    <div className="w-10p">x2 </div>
                    <div className="w-10p">$ 0.00 </div>
                    <div className="w-5p">$ 30.00 </div>
                    <div className="w-5p">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle
                          color="transparent"
                          style={{ height: "30px", padding: "0 20px" }}
                        >
                          <MaterialIcon icon="more_horiz" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            <span className="dropdown-toggle-content">
                              <MaterialIcon icon="visibility" size="sm" />
                              View Detail
                            </span>
                          </DropdownItem>
                          <DropdownItem>
                            <span className="dropdown-toggle-content">
                              <MaterialIcon icon="mode" size="sm" />
                              Edit
                            </span>
                          </DropdownItem>
                          <DropdownItem>
                            <span className="dropdown-toggle-content red">
                              <MaterialIcon icon="delete_outline" size="sm" />
                              Delete
                            </span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="resume">
            <section className="row">
              <div className="form-group col-md-6">
                <label className="" htmlFor="phone">
                  Customer Notes
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  placeholder="Type Something"
                >Type Something</textarea>
              </div>
              <div className="form-group col-md-6">
                <label className="" htmlFor="phone">
                  Staff Notes
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  placeholder="Type Something"
                >Type Something</textarea>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="LastName">Promotional Code</label>
                <input
                  type="text"
                  className="custom-input"
                  id="lastName"
                  placeholder="Type promotion code"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="LastName">Date Created</label>
                <input
                  type="text"
                  className="custom-input"
                  id="lastName"
                  placeholder="May 05, 21 - 10:02"
                />
              </div>
              <h1>Payment Information</h1>
              <div className="form-group col-md-6">
                <label htmlFor="LastName">Payment Method</label>
                <input
                  type="text"
                  className="custom-input"
                  id="lastName"
                  placeholder="Cash on Delivery"

                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="LastName">Status</label>
                <input
                  type="text"
                  className="custom-input"
                  id="lastName"
                  placeholder="Success"
                />
              </div>
            </section>
            <section className="order-amount">
              <div>Subtotal:</div><span>$135.00</span>
              <div>Shipping Cost:</div><span>$9.52</span>
              <div>Including Discount:</div><span>$0.00</span>
              <div>Tax:</div><span>$13.5</span>
              <div>Total:</div><span>$157.75</span>
            </section>
          </div>
        </section >
      </Card >
    </div >
  );
};

export default OrderDetails;
