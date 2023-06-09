import React, { useState, useEffect, useRef } from "react";
import Img from "../images/img.png";

function FileUploadButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // const handleSubmit =   (event) => {
  //   console.log("Submitting");
  //   // console.log("ref : ",fileInputRef.current)
  //   event.preventDefault();

  //   if (selectedImage) {
  //     const formData = new FormData();
  //     // formData.append("image", selectedImage);
  //     formData.append('image', selectedImage);

  //     console.log("formdata",formData.get('image'))
  //     const response =  fetch("http://127.0.0.1:5000/classify", {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle the API response data
  //         console.log(data);
  //         const fruitName = data.fruit_name;
  //         console.log("Fruit Name:", fruitName);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = formData.get("message");

    fetch("http://127.0.0.1:5000/message", {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="message" />
        <button type="submit">Send Message</button> */}
      </form>
      <button className="uploadButton" onClick={handleClick}>
        {selectedImage ? (
          <>
            <div className="preview">
              <h1>Selected Image</h1>

              <img
                src={selectedImage}
                className="previewImage"
                alt="Selected"
              />
            </div>
          </>
        ) : (
          <>
            <img src={Img} className="imageIcons" alt="upload Image" />
            <h2 className="finalUpload">Let’s find out!</h2>
            <p className="usageInfo">Click here to add an image</p>
          </>
        )}
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button type="submit" className="btn trynow" onClick={handleSubmit}>
        Identify !
      </button>
      {/* </form> */}
    </>
  );
}

export default FileUploadButton;
