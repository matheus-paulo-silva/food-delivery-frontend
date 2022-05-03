import React, { useState } from "react";
import "./styles.scss";
import InfoResume from "../../info-resume/info-resume";
import SideScreen from "../side-screen";
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

const AddOrder = (): JSX.Element => {
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
    building: "",
    apartament: "",
    tower: "",
    addnumb: "",
    street: "",
    nation: "",
    dateCreate: "",
  });
  const [selected, setSelected] = useState("");
  const [showSideScreen, setShowSideScreen] = useState(false);

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

  const handleOpenSideScreen = () => {
    setShowSideScreen(!showSideScreen)
  }

  return (
    <div className="container">
      <SideScreen show={showSideScreen} onClickClose={handleOpenSideScreen}>
        <section className="filter-section">
          <h1>Products Search</h1>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="FirstName">Name Product</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Name Product"
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="FirstName">Price ($)</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="0"
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="FirstName">Price ($)</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="0"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="Address">Category</label>
              <select
                className="form-select input"
                key={form.building}
                id="building"
              >
                <option selected>Bakery</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </section>
        <section className="section-table">
          <div className="table-block">
            <div className="w-100p h-80p d-flex fxd-c border-table">
              <div className="table-header peers jc-sb ">
                <div className="w-15p d-n@md-">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="w-40p d-n@md-">
                  <span>Name Product</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Price</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Qty</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>Discount</span>
                </div>
                <div className="w-10p d-n@md-">
                  <span>SubTotal</span>
                </div>
              </div>
              <div
                className="ps psb h-100p w-100p table-content"
                style={{ border: "1px solid #ccc" }}
              >
                {[0, 1, 2, 3, 4, 5].map((item, idx) => (
                  <div key={idx} className="table-tr-order-product ai-c tb-hover peers jc-sb bdB">
                    <div className="w-5p d-n@md-">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="w-10p">
                      <img className="image small" src="https://assets.unileversolutions.com/recipes-v2/230411.jpg?imwidth=800" />
                    </div>
                    <div className="w-40p">
                      Macaroon cake filled with pineapple
                    </div>
                    <div className="w-10p">$ 25.00 </div>
                    <div className="w-10p">x2 </div>
                    <div className="w-10p">$ 0.00 </div>
                    <div className="w-10p">$ 30.00 </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SideScreen>
      <Header
        icon={<Add />}
        nav={"/order"}
        text="Create"
        type={"Orders"}
        dashboard={"Dashboard"}
        highlight={"Add Orders"}
        title={"Add Orders"}
      />
      <Card>
        <section className="order-block">
          <section className="form-section">
            <h1>Customer Information</h1>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  className="custom-input"
                  id="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                />
              </div>
              <div className="form-group col-md-6"></div>
              <div className="form-group col-md-1">
                <label className="input-required" htmlFor="CountryCode">
                  Country Code
                </label>
                <input
                  type="text"
                  className="custom-input"
                  id="countryCode"
                  placeholder="Country"
                  value={form.countryCode}
                  onChange={onChange("countryCode")}
                />
              </div>
              <div className="form-group col-md-2">
                <label className="input-required" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  className="custom-input"
                  id="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={onChange("phone")}
                />
              </div>
              <div className="form-group col-md-3">
                <label className="input-required" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="custom-input"
                  id="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange("email")}
                />
              </div>
            </div>
            <div className="form-group col-md-6"></div>
          </section>
          <section className="form-section">
            <h1>Address Bock</h1>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="Address">Building</label>
                <select
                  className="form-select input"
                  key={form.building}
                  id="building"
                  value={form.building}
                  onChange={onChange("building")}
                >
                  <option selected>Apartament</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Apartament">Apartament</label>
                <input
                  type="text"
                  className="custom-input"
                  id="apartament"
                  placeholder="Apartament"
                  value={form.apartament}
                  onChange={onChange("apartament")}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Tower">Towner / Unit Number</label>
                <input
                  type="text"
                  className="custom-input"
                  id="tower"
                  placeholder="Towner / Unit Number"
                  value={form.tower}
                  onChange={onChange("tower")}
                />
              </div>
              <div className="form-group col-md-3"></div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="addnumb">Add. No</label>
                <input
                  type="text"
                  className="custom-input"
                  id="addnumb"
                  placeholder="Number"
                  value={form.addnumb}
                  onChange={onChange("addnumb")}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Street">Street</label>
                <input
                  type="text"
                  className="custom-input"
                  id="street"
                  placeholder="Street"
                  value={form.street}
                  onChange={onChange("street")}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="zipCode">City</label>
                <select
                  className="form-select input"
                  key={form.city}
                  id="city"
                  value={form.city}
                  onChange={onChange("city")}
                >
                  <option selected>London</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group col-md-3">
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="zipCode">Nation</label>
                <select
                  className="form-select input"
                  key={form.nation}
                  id="city"
                  value={form.nation}
                  onChange={onChange("nation")}
                >
                  <option selected>United Kingdom</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <h1>Order Information</h1>
            <section className="button-block-form-order">
              <button type="button" className="btn-void-custom" onClick={handleOpenSideScreen}>
                <span> <Add /> Add Product</span>
              </button>
            </section>
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
                    <div key={idx} className="table-tr-order tb-hover peers jc-sb bdB">
                      <div className="w-5p d-flex ai-c jc-c">
                        <img className="image small" src="https://assets.unileversolutions.com/recipes-v2/230411.jpg?imwidth=800" />
                      </div>
                      <div className="w-55p d-grid">
                        Macaroon cake filled with pineapple
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
                  <label htmlFor="LastName">Promotional Code</label>
                  <input
                    type="text"
                    className="custom-input"
                    id="lastName"
                    placeholder="Type promotion code"
                  />
                </div>
                <div className="form-group col-md-6"></div>
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

                <h1>Payment Information</h1>
                <div className="form-group col-md-6">
                  <label htmlFor="LastName">Payment Method</label>
                  <select
                    className="form-select input"
                    key={form.building}
                    id="building"
                    value={form.building}
                    onChange={onChange("building")}
                  >
                    <option selected>Cash on Delivery</option>
                    <option>Cash on Delivery(visa, master...)</option>
                    <option>Domestic Card</option>
                    <option>ftripay</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="LastName">Status</label>
                  <select
                    className="form-select input"
                    key={form.building}
                    id="building"
                    value={form.building}
                    onChange={onChange("building")}
                  >
                    <option selected>Succcess</option>
                    <option>Canceled</option>
                    <option>On Going</option>
                    <option>Failed</option>
                  </select>
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
        </section>
      </Card >
    </div >
  );
};

export default AddOrder;
