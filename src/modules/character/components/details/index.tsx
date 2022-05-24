import React, { useState, useEffect } from "react";
import "./styles.scss";
import TagsInput from "../TagsInput";
import { CustomUploader, Card, Header } from "../../../../shared";
import { Save } from "../../../../shared/icon-set2";
import api from "../../services"
import { useParams } from "react-router-dom";
import CharacterList from "../list";

const CharacterDetail = (): JSX.Element => {
  const { characterId } = useParams();

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

  const [character, setCharacter] = useState({
    id: null,
    thumbnail: {
      path: "",
      extension: "",
    },
    name: "",
    events: {
      items: []
    },
    description: "",
    modified: "",
  });
  useEffect(() => {
    /* console.log(characterId) */
    if (characterId === "new") {
      setCharacter({
        id: null,
        thumbnail: null,
        name: "",
        events: null,
        description: "",
        modified: "",
      })
    } else {
      handleGetCharacterById(Number(characterId))
    }
  }, [])

  const onChange = (field) => (evt) => {
    /* console.log(field, evt.target.value) */
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const onChange2 = (evt) => {
    /* console.log(evt.target.name)
    console.log(evt.target.value) */
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

  const handleGetCharacterById = async (characterId: number): Promise<Object> => {
    try {
      const response = await api.getCharactersById(characterId)
      setCharacter(response.data.results[0])
      return {}
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <div className="container">
      <Header
        icon={<Save />}
        nav={"/character"}
        text="Save"
        type={"Character"}
        dashboard={"Details"}
        highlight={character.id}
        title={"Character"}
        pageUrl={"characters"}
      />
      <Card>
        <form className="form-horizontal">
          <div className="form-block">
            <h1>Character Image</h1>
            <CustomUploader fileUrl={characterId !== "new" && `${character.thumbnail?.path}.${character.thumbnail?.extension}`} />
            <section className="form-section">
              <h1>Character Information</h1>
              <div className="row">
                <div className="form-group col-md-3">
                  <label className="" htmlFor="email">
                    Character Name
                  </label>
                  <input
                    type="input"
                    className="custom-input"
                    id="nameCategory"
                    placeholder="Category"
                    value={character.name}
                    onChange={onChange("nameCategory")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="state">Events</label>
                  <select
                    className="custom-select"
                    /* key={} */
                    id="classification"
                    /* value={} */
                    onChange={onChange("classification")}
                    disabled={character.events?.items.length === 0}
                  >
                    {character.events?.items.map((char, idx) => <option key={`${idx}`}>{char.name}</option>)}
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="email">Description</label>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Type Something"
                    value={character.description}
                  />
                </div>
              </div>
            </section>
            <section className="form-section">
              <h1>Last Modified</h1>
              <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="Address">Date Modified</label>
                  <input
                    type="text"
                    className="custom-input"
                    id="pageTitle"
                    placeholder="Page Title"
                    value={character.modified}
                    onChange={onChange("pageTitle")}
                    disabled
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

export default CharacterDetail;
