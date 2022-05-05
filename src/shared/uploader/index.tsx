import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Remove, EmptyFile } from "../../shared/icon-set2";
const CustomUploader = ({ fileUrl }): JSX.Element => {
  const [file, setFile] = useState({
    picture: null,
  });


  useEffect(() => {
    setFile({
      picture: fileUrl,
    })
  }, [fileUrl])

  const onFileChange = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      //this.setState({ attachedFile: reader.result })
      // Update the state 
      setFile({
        picture: URL.createObjectURL(file)
      })

    };/*  const data = {
        selectedFile: file,
        picture: URL.createObjectURL(file),
        base64: reader.result
      }
      setSelectedImage(prevState => ({ ...prevState, [name]: data.base64 }));

    }; */
  }
  const handleRemoveImage = () => {
    setFile({ picture: null })
  }

  return (
    <React.Fragment>
      <div className="img-upload-box">
        <div className="img-upload"
          style={{
            backgroundImage: "url(" + EmptyFile + ")"
          }}>
          <label>
            {file.picture && (
              <img
                className="img-cover"
                alt="not fount"
                src={file.picture}
              />
            )}
            <input
              className="input-img"
              type="file"
              name="myImage"
              onChange={onFileChange}
            />
          </label>
        </div>
      </div>
      <button
        className="btn-dark-custom"
        type="button"
        onClick={handleRemoveImage}
      >
        <Remove />
        <span>Remover</span>
      </button>
    </React.Fragment>
  );
};

export default CustomUploader
