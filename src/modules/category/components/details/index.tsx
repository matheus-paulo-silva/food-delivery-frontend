import React, { useState, useEffect } from "react";
import "./styles.scss";
import TagsInput from "../TagsInput";
import { CustomUploader, Card, Header } from "../../../../shared";
import { Save } from "../../../../shared/icon-set2";

const AddCategory = (): JSX.Element => {
  const [form, setForm] = useState({
    nameCategory: "",
    classification: null,
    date: "",
    status: "",
    pageTitle: "",
    metaKeywords: [],
    metaDescription: "",
    url: "",
  });
  const [classification, setClassification] = useState([
    { id: 1, name: "Roof Lever - Bakerym" },
    { id: 2, name: "Carlos - Bakery" },
    { id: 3, name: "Bakery - Food" },
    { id: 4, name: "Testing" }
  ]);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setForm({
      nameCategory: "Joao",
      classification: 3,
      date: "2022-05-02",
      status: "A",
      pageTitle: "Bakery",
      metaKeywords: ["Bakery", "Teste"],
      metaDescription: "Owner for this bakery: Carlos",
      url: "https://www.daninoce.com.br/wp-content/uploads/2019/02/vale-a-pena-ir-na-carlos-bakery-em-sao-paulo-destaque-960x625.jpg"
    })
  }, [])

  const onChange = (field) => (evt) => {
    console.log(field, evt.target.value)
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const onChange2 = (evt) => {
    console.log(evt.target.name)
    console.log(evt.target.value)
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };


  const selectedTags = tags => {
    console.log(tags);
  };

  /*  const saveForm = () => {
    console.log(form);
    console.log(selected);
  }; */

  return (
    <div className="container">
      <Header
        icon={<Save />}
        nav={"/category"}
        text="Save"
        type={"Category"}
        dashboard={"Dashboard"}
        highlight={"Bakery"}
        title={"Bakery"}
      />
      <Card>
        <form className="form-horizontal">
          <div className="form-block">
            <h1>Category Image</h1>
            <CustomUploader fileUrl={form.url} />
            <section className="form-section">
              <h1>Category Information</h1>
              <div className="row">
                <div className="form-group col-md-3">
                  <label className="" htmlFor="email">
                    Name Category
                  </label>
                  <input
                    type="input"
                    className="custom-input"
                    id="nameCategory"
                    placeholder="Category"
                    value={form.nameCategory}
                    onChange={onChange("nameCategory")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="state">Classification</label>
                  <select
                    className="custom-select"
                    key={form.classification}
                    id="classification"
                    value={form.classification}
                    onChange={onChange("classification")}
                  >
                    {classification.map(classif => <option key={classif.id} value={classif.id}>{classif.name}</option>)}
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="email">Date Created</label>
                  <input
                    type="date"
                    className="custom-input"
                    id="date"
                    placeholder="May 05, 21 - 10:02"
                    value={form.date}
                    onChange={onChange("date")}
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
                      name="status"
                      id="A"
                      checked={form.status === "A"}
                      value={"A"}
                      onChange={onChange2}
                    />
                    <label className="radio-label" htmlFor="A">
                      Active
                    </label>
                  </div>
                  <div className="col-md-3 radio">
                    <input
                      className="radio"
                      type="radio"
                      name="status"
                      id="D"
                      checked={form.status === "D"}
                      value={"D"}
                      onChange={onChange2}
                    />
                    <label className="radio-label" htmlFor="D">
                      Disable
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <section className="form-section">
              <h1>Meta Data</h1>
              <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="Address">Page Title</label>
                  <input
                    type="text"
                    className="custom-input"
                    id="pageTitle"
                    placeholder="Page Title"
                    value={form.pageTitle}
                    onChange={onChange("pageTitle")}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="Apartament">Meta Keywords</label>
                  <TagsInput selectedTags={selectedTags} tags={form.metaKeywords} />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3">
                  <label className="" htmlFor="phone">
                    Meta Description
                  </label>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Type Something"
                    value={form.metaDescription}
                  />
                </div>
              </div>
            </section>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddCategory;
