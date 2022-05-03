import React, { useState } from "react";
import "./styles.scss";
import { Remove } from "../../../shared/icon-set2";
const UploadAndDisplayImage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>
      <div className="img-upload-box-order">
        <div className="img-upload-order">
          <label>
            {selectedImage && (
              <img
                className="img-cover-order"
                alt="not fount"
                src={URL.createObjectURL(selectedImage)}
              />
            )}
            <input
              className="input-img-order"
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </label>
        </div>
      </div>
     {/*  <button
        className="btn-dark-custom"
        type="button"
        onClick={() => setSelectedImage(null)}
      >
        <Remove />
        <span>Remover</span>
      </button> */}
    </React.Fragment>
  );
};

export default UploadAndDisplayImage;
