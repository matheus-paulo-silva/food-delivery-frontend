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

const OrderList = (): JSX.Element => {
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
        nav={"/order/add-order"}
        text="Add Orders"
        type={"order"}
        dashboard={"Dashboard"}
        highlight={""}
        title={"Order"}
      />
      <Card>
        <div className="action-block">
          <section className="search-block-form">
            <input
              className="custom-input-search"
              type="text"
              placeholder="Search"
            />
            <button type="button" className="btn-dark-custom">
              <span>Search</span>
            </button>
          </section>
        </div>
        <div className="w-100p h-100p d-flex fxd-c border-table">
          <div className="table-header peers jc-sb ">
            <div className="w-5p d-n@md-">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="w-10p d-n@md-">
              <span>Code Order</span>
            </div>
            <div className="w-10p d-n@md-">
              <span>Status</span>
            </div>
            <div className="w-15p d-n@md-">
              <span>Date</span>
            </div>
            <div className="w-15p d-n@md-">
              <span>Customer</span>
            </div>
            <div className="w-15p d-n@md-">
              <span>Phone</span>
            </div>
            <div className="w-10p d-n@md-">
              <span>Total</span>
            </div>
            <div className="w-5p d-n@md-"></div>
          </div>
          <div
            className="ps psb h-100p w-100p table-content"
            style={{ border: "1px solid #ccc" }}
          >
            {fakeData.map((item, idx) => (
              <div key={idx} className="table-tr tb-hover peers jc-sb bdB">
                <div className="w-5p status-area">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="w-10p">
                  <Link to={`/order/${item.codeOrder}`} className="link-button green">
                    {item.codeOrder}
                  </Link>
                </div>
                {/* <div className={`w-10p status ${item.status}`}>{item.status}</div> */}
                  {
                    {
                      'ONGOING': <div className="w-10p status on-going">On Going</div>,
                      'SUCCESS': <div className= "w-10p status success">Success</div>,
                      'FAILED': <div className= "w-10p status failed">Failed</div>,
                      'CANCELED': <div className= "w-10p status canceled">Canceled</div>,
                    } [item.status]
                  }
                <div className="w-15p">May 06, 21 - 16:00</div>
                <div className="w-15p">Theresa Webb</div>
                <div className="w-15p">(316) 555-0116</div>
                <div className="w-10p">$ 402.00</div>
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
        <div style={{ background: "#f2f2f2", minHeight: "50px" }}>page</div>
      </Card>
    </div>
  );
};

export default OrderList;
