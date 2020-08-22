import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { imageData } from "./imageData";

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1JzxcjGaKBpPj1lCH59BFgUWG2hZNkvLj?usp=sharing";
const SliderComponents = () => {
  return (
    <main className="gallery-container">
      <div className="container mt-5">
        <Carousel interval={3000}>
          {imageData.map((image) => (
            <Carousel.Item key={image.id}>
              <img src={image.imgUrl} alt="gallery" style={{ width: "100%" }} />
              <Carousel.Caption>
                <p style={{ color: "#0597F2", fontWeight: 600 }}>
                  {image.caption}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="d-flex justify-content-center">
          <a
            href={DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 font-weight-bolder"
            style={{ color: "#0597F2", fontWeight: 400 }}
            title="See more"
          >
            See more
            <i className="fa fa-arrow-right ml-2"> </i>
          </a>
        </div>
      </div>
    </main>
  );
};

export default SliderComponents;
