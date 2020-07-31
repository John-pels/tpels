import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SliderComponents = () => {
  return (
    <main className="gallery-container">
      <div className="container">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1594568416/DSC_9202.jpg"
              alt="image-1"
            />
            <Carousel.Caption>
              <p>This is Year 2014</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1594568416/DSC_9202.jpg"
              alt="image-1"
            />
            <Carousel.Caption>
              <p>This is Year 2014</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="d-flex justify-content-center">
          <a
            href="https://drive.google.com/drive/folders/1JzxcjGaKBpPj1lCH59BFgUWG2hZNkvLj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 font-weight-bolder"
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
