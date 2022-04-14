import React, { useState } from "react";
import './styles.scss'
import { Remove } from '../shared/icon-set2';
const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <React.Fragment>
            <div className="img-upload-box">
                <div className="img-upload">
                    <label>
                            {selectedImage &&  <img className="img-cover" alt="not fount" src={URL.createObjectURL(selectedImage)} /> }
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
            <button className="btn-dark-custom" type="button" onClick={()=>setSelectedImage(null)}><Remove /><span>Remover</span></button>
        </React.Fragment>
    );
};

export default UploadAndDisplayImage;