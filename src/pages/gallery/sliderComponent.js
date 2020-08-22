import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1JzxcjGaKBpPj1lCH59BFgUWG2hZNkvLj?usp=sharing";
const SliderComponents = () => {
  const imageData = [
    {
      id: 1,
      caption: "Kingdoms first Physical Conference in 2017",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598097780/KH%20GALLERY/KINGDOM%20HELPS%20%401%20%282017%29/DSC_9317_wyzpf5.jpg",
    },

    {
      id: 2,
      caption: "Kingdoms first Physical Conference in 2017",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598097749/KH%20GALLERY/KINGDOM%20HELPS%20%401%20%282017%29/DSC_9300_yldem2.jpg",
    },

    {
      id: 3,
      caption: "Kingdoms first Physical Conference in 2017",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598097591/KH%20GALLERY/KINGDOM%20HELPS%20%401%20%282017%29/DSC_9274_e1mnbk.jpg",
    },
    {
      id: 4,
      caption: "2017 Charity Outreach",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598096850/KH%20GALLERY/CHARITY%20OUTREACH%202017/IMG-20180526-WA0020_upvctd.jpg",
    },

    {
      id: 5,
      caption: "2017 Charity Outreach",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598096847/KH%20GALLERY/CHARITY%20OUTREACH%202017/IMG-20180526-WA0015_xqmy9r.jpg",
    },
    {
      id: 6,
      caption: "2017 Charity Outreach",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598096847/KH%20GALLERY/CHARITY%20OUTREACH%202017/IMG-20180526-WA0014_yeibh6.jpg",
    },

    {
      id: 7,
      caption: "2017 Charity Outreach",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598096843/KH%20GALLERY/CHARITY%20OUTREACH%202017/IMG-20180526-WA0010_papicz.jpg",
    },

    {
      id: 8,
      caption: "Kingdom Helps 2018 Charity Outreach in Osun State,Ilesha ",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598098370/KH%20GALLERY/CHARITY%20OUTREACH%202018/ilesa_5_lukxsh.jpg",
    },
    {
      id: 9,
      caption: "Kingdom Helps 2018 Charity Outreach in Ondo State ",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598098326/KH%20GALLERY/CHARITY%20OUTREACH%202018/ondo_1_hqwbsd.jpg",
    },
    {
      id: 10,
      caption: "Kingdom Helps 2018 Charity Outreach in Lagos State, Abule-Egba",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598098152/KH%20GALLERY/CHARITY%20OUTREACH%202018/ilesa_3_qmz6sd.jpg",
    },

    {
      id: 11,
      caption: "Kingdom Helps 2018 Charity Outreach in Zamfara ",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598100840/KH%20GALLERY/CHARITY%20OUTREACH%202018/5_u28vsy.jpg",
    },
    {
      id: 12,
      caption: "Kingdom Helps 2018 Charity Outreach in Zamfara ",
      imgUrl:
        "https://res.cloudinary.com/grace-pels-photography/image/upload/v1598100838/KH%20GALLERY/CHARITY%20OUTREACH%202018/6_ryrk87.jpg",
    },
  ];

  return (
    <main className="gallery-container">
      <div className="container mt-5">
        <Carousel interval={3000}>
          {imageData.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                src={image.imgUrl}
                alt="gallery"
                style={{ width: "100%", height: "30%" }}
              />
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
