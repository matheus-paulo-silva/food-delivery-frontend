import React, { useState } from "react";
import "./styles.scss";
import Card from "../../../../shared/card";
import Header from "../../../../shared/header";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import { Add } from "../../../../shared/icon-set2";

const CategoryList = (): JSX.Element => {
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
  });
  const [selected, setSelected] = useState("");
  const [fakeData] = useState([
    { codeOrder: 123455, status: "SUCCESS" },
    { codeOrder: 123456, status: "FAILED" },
    { codeOrder: 123457, status: "CANCELED" },
    { codeOrder: 123458, status: "ONGOING" },
    { codeOrder: 123455, status: "SUCCESS" },
    { codeOrder: 123456, status: "FAILED" },
    { codeOrder: 123457, status: "CANCELED" },
    { codeOrder: 123458, status: "ONGOING" },
    { codeOrder: 123455, status: "SUCCESS" },
    { codeOrder: 123456, status: "FAILED" },

  ]);

  const onChange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const saveForm = () => {
    console.log(form);
    console.log(selected);
  };

  return (
    <div className="container">
      <Header
        icon={<Add />}
        nav={"/category/add-category"}
        text="Add Category"
        type={""}
        dashboard={"Dashboard"}
        highlight={"Category"}
        title={"Category"}
      />
      <Card>
        <div className="action-block">
          <section className="search-block-form">
            <div className="d-grid">
              <label htmlFor="status">Status</label>
              <input
                className="custom-input-search"
                type="text"
                placeholder="Search"
              />
            </div>
            <button type="button" className="btn-dark-custom">
              <span>Search</span>
            </button>
          </section>
          <section className="button-block-form-category">
            <button type="button" className="btn-void-custom">
              <span>Status</span>
            </button>
            <button type="button" className="btn-void-custom">
              <span>Group</span>
            </button>
            <button type="button" className="btn-void-custom">
              <span>Export</span>
            </button>
            <button type="button" className="btn-void-custom">
              <span>Delete</span>
            </button>
            <button type="button" className="btn-void-custom">
              <span>Cancel</span>
            </button>
          </section>
        </div>
        <div className="w-100p h-100p d-flex fxd-c border-table">
          <div className="table-header peers jc-sb ">
            <div className="w-10p d-n@md-">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="w-10p d-n@md-">
              <span>Icon</span>
            </div>
            <div className="w-40p d-n@md-">
              <span>Name</span>
            </div>
            <div className="w-30p d-n@md-">
              <span>Quantity</span>
            </div>
            <div className="w-10p d-n@md-">
              <span>Status</span>
            </div>
            <div className="w-5p d-n@md-"></div>
          </div>
          <div
            className="ps psb h-100p table-content"
            style={{ border: "1px solid #ccc" }}
          >
            {[0, 1, 2, 3, 4, 5].map((item, idx) => (
              <div key={idx} className="table-tr tb-hover peers jc-sb bdB">
                <div className="w-10p status-area">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="w-10p status-area">
                  Icon
                </div>
                <div className="w-40p status-area">Bakery</div>
                <div className="w-30p status-area">91</div>
                <div className="w-10p peers  status-area">
                  <select className="custom-select-table">
                    <option className="active-option">Active</option>
                    <option className="inactive-option">Inactive</option>
                  </select>
                </div>
                <div className="w-5p status-area">
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
        <div style={{ background: "#f2f2f2", minHeight: "50px" }}>page</div>
      </Card>
    </div>
  );
};

export default CategoryList;
