import React, { useState, useEffect } from "react";
import "./styles.scss";
import TagsInput from "../TagsInput";
import { CustomUploader, Card, Header } from "../../../../shared";
import { Save } from "../../../../shared/icon-set2";
import api from "../../services"
import { useParams } from "react-router-dom";


const ComicsDetail = (): JSX.Element => {
  const { comicsId } = useParams();

  type creatorType = {
    name: string;
    role: string;
  }

  type comicsSeriesTypes = {
    id: number;
    title: string;
    name: string;
    creators: {
      available: number;
      collectionURI: string;
      items: Array<creatorType>
    };
  }


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

  const [comics, setComics] = useState({
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
    images: [],
    title: "",
  });

  const [comicsStories, setComicsStories] = useState<comicsSeriesTypes[]>([])

  useEffect(() => {
    console.log(comicsStories)
    if (comicsId === "new") {
      setComics({
        id: null,
        thumbnail: null,
        name: "",
        events: null,
        description: "",
        modified: "",
        images: null,
        title: "",
      })
      setComicsStories([])
    } else {
      handleGetComicsById(Number(comicsId))
      handleGetComicsStories(Number(comicsId))
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

  const handleGetComicsById = async (comicsId: number): Promise<Object> => {
    try {
      const response = await api.getComicsById(comicsId)
      setComics(response.data.results[0])
      return {}
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const handleGetComicsStories = async (comicsId: number): Promise<Object> => {
    try {
      const response = await api.getComicsStories(comicsId)
      setComicsStories(response.data.results)
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
        highlight={comics.id}
        title={"comics"}
        pageUrl={"comics"}
      />
      <Card>
        <form className="form-horizontal">
          <div className="form-block">
            <div className="detail-thumb-img" style={{ backgroundImage: `url('${comics.thumbnail?.path}.${comics.thumbnail?.extension}')` }}></div>
            <div className="img-thumb">
              <CustomUploader fileUrl={comicsId !== "new" && `${comics.thumbnail?.path}.${comics.thumbnail?.extension}`} />
            </div>
            <section className="grid-image">
              {comics.images?.map((comic, idx) => <div className="detail-grid-image" style={{ backgroundImage: "url(" + comic.path + "." + comic.extension + ")" }} />)}
              <div className="">
                <h1>{comics.title}</h1>
                <p className="detail-thumb-text">{comics.description}</p>
              </div>
              {/* <img src={`${comics?.images[0]?.path}.${comics?.images[0]?.extension}`} /> */}
              {/* {JSON.stringify(`${comics.thumbnail?.path}.${comics.thumbnail?.extension}`)} <br></br>
                {JSON.stringify(comics.images?.map((comic, idx) => `${comic.path}.${comic.extension}`))} */}
            </section>
            {comicsStories.length > 0 &&
              <section className="">
                {comicsStories.map((story) =>
                  <div>
                    <p>#{story.id} | {story.title}</p>
                    <div>{story.creators.items.map((creator) => creator.name ).join(", ")}</div>
                  </div>
                )}
              </section>
            }
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ComicsDetail;
