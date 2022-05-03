import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Remove } from "../../../shared/icon-set2";
const UploadAndDisplayImage = ({ imageUrl }): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(null);



  useEffect(() => {
    setSelectedImage(imageUrl)
  }, [imageUrl])

  /*   const onFileChange = (e, name) => {
      const file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        //this.setState({ attachedFile: reader.result })
        // Update the state 
        const data = {
          selectedFile: file,
          picture: URL.createObjectURL(file),
          base64: reader.result
        }
        setSelectedImage(prevState => ({ ...prevState, [name]: data.base64 }));
  
      };
    } */
  return (
    <React.Fragment>
      <div className="img-upload-box">
        <div className="img-upload">
          <label>
            {selectedImage && (
              <img
                className="img-cover"
                alt="not fount"
                src={imageUrl}
              />
            )}
            <input
              className="input-img"
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <small>Solte Aqui</small>
          </label>
        </div>
      </div>
  {/*     <div className="image-upload">
        <label>
          <div className="helper">
            <img className="img-cover" src={pacientFile.patient_photo ? pacientFile.patient_photo : emptyProfileImage} />
            <small>Arraste e solte o arquivo aqui</small>
          </div>
          <input onClick={(event) => {
            event.currentTarget.value = null
          }} type="file" id="file-desktop_version" onChange={onFileChange} onChange={(e) => onFileChange(e, 'patient_photo')} />
          <span>Escolher arquivo</span>
        </label>

      </div> */}
      <button
        className="btn-dark-custom"
        type="button"
        onClick={() => setSelectedImage(null)}
      >
        <Remove />
        <span>Remover</span>
      </button>
    </React.Fragment>
  );
};

export default UploadAndDisplayImage;
