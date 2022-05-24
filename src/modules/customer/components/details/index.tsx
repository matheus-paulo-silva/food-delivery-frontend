import React, { useState } from "react";
import "./styles.scss";
import InfoOrder from "../../info-order/info-order";
import { CustomUploader, Card, Header } from "../../../../shared";
import { Save } from "../../../../shared/icon-set2";
import { useParams } from "react-router-dom";

const Details = (): JSX.Element => {
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
    imageUser: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
  });
  const [selected, setSelected] = useState("");
  const { id } = useParams();
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
        nav={"/customer"}
        text="Save"
        type={"customer"}
        dashboard={"Dashboard"}
        highlight={"541354"}
        title={"Customer"}
      />
      <Card>
        <form className="form-horizontal">
          <InfoOrder />
          <div className="form-block">
            <h1>Image User</h1>
            <CustomUploader fileUrl={form.imageUser} />
            <section className="form-section">
              <h1>User Information</h1>
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
                <div className="form-group col-md-2">
                  <label className="input-required" htmlFor="CountryCode">
                    Country Code
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    id="countryCode"
                    placeholder="Country Code"
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
                <div className="form-group col-md-2">
                  <label className="input-required" htmlFor="phone">
                    Password
                  </label>
                  <input
                    type="text"
                    className="custom-input"
                    id="phone"
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange("password")}
                  />
                </div>
              </div>
              <div className="row">
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
                <div className="form-group col-md-3">
                  <label htmlFor="email">D.O.B</label>
                  <input
                    type="text"
                    className="custom-input"
                    id="dob"
                    placeholder="D.O.B"
                    value={form.dob}
                    onChange={onChange("dob")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="state">Gender</label>
                  <select
                    className="custom-select"
                    key={form.gender}
                    id="state"
                    value={form.gender}
                    onChange={onChange("gender")}
                  >
                    <option></option>
                    <option>Male</option>
                    <option selected>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
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
              </div>
              <div className="row">
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
              <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="Street">Date Created</label>
                  <input
                    type="text"
                    className="custom-input"
                    id="dateCreate"
                    placeholder="Date Created"
                    value={form.dateCreate}
                    onChange={onChange("dateCreate")}
                  />
                </div>
                <div className="row col-md-6">
                  <div className="col-md-12">
                    <label htmlFor="status">Status</label>
                  </div>
                  <div className="col-md-3 radio">
                    <input
                      className="radio"
                      type="radio"
                      name="radio"
                      id="radio-1"
                      checked /* value="option1" */
                    />
                    <label className="radio-label" htmlFor="radio-1">
                      Active
                    </label>
                  </div>
                  <div className="col-md-3 radio">
                    <input
                      className="radio"
                      type="radio"
                      name="radio"
                      id="radio-2" /* value="option2" */
                    />
                    <label className="radio-label" htmlFor="radio-2">
                      Disable
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Details;
