import React, { useEffect, useState } from "react";
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
import { Add, CategoryIcon } from "../../../../shared/icon-set2";
import api from "../../services"


const ComicsList = (): JSX.Element => {
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

  const [comics, setComics] = useState([]);

  useEffect(() => {
    console.log(comics)
    handleComics()
  }, [])

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

  const handleComics = async (): Promise<any> => {
    try {
      const params = {
        limit: 15
      }
      const response = await api.getComics(params)
      console.log(response.data.results)
      setComics(response.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="container">
      <Header
        icon={<Add />}
        nav={"/Comics/new"}
        text="Add Comics"
        type={""}
        dashboard={"List"}
        highlight={"Comics"}
        title={"Comics"}
      />
      <Card>
        <div className="action-block">
          <section className="search-block-form">
            <div className="d-grid search-content">
              <label htmlFor="status">Search</label>
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
            <button type="button" className="btn-void-custom" onClick={handleComics}>
              <span>refresh</span>
            </button>
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
            <div className="w-5p d-n@md-">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="w-10p d-n@md-">
              <span>Image</span>
            </div>
            <div className="w-10p d-n@md-">
              <span>Id</span>
            </div>
            <div className="w-30p d-n@md-">
              <span>Title</span>
            </div>
            <div className="w-25p d-n@md-">
              <span>Description</span>
            </div>
            <div className="w-10p d-n@md-">
              <span>Sale Date</span>
            </div>
            <div className="w-5p d-n@md-">
              <span>Foc Date</span>
            </div>
            <div className="w-5p d-n@md-"></div>
          </div>
          <div
            className="ps psb h-100p table-content"
            style={{ border: "1px solid #ccc" }}
          >

            {comics.map((item, idx) => (
              <div key={idx} className="table-tr tb-hover peers jc-sb bdB">
                <div className="w-5p">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="w-10p">
                  {/* <CategoryIcon width={30} height={30} /> */}
                  <img className="image small" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                </div>
                <div className="w-10p">
                  <Link to={`/comics/${item.id}`} className="link-button green">
                    {item.id}
                  </Link>
                </div>
                <div className="w-30p"><p className="description two-lines">{item.title}</p></div>
                <div className="w-25p"><p className="description two-lines">{item.description}</p></div>
                <div className="w-10p">
                  {<p className="description two-lines">{item?.dates[0]?.date}</p>}
                </div>
                <div className="w-5p">
                {<p className="description two-lines">{item?.dates[1]?.date}</p>}
                </div>
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

export default ComicsList;
