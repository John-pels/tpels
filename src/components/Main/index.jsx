import React from "react";
import { Link } from "gatsby";
import "./main.scss";

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/john-pels/image/upload/v1594568416/DSC_9202.jpg') 60% 35% no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};
export default function Main() {
  return (
    <div className="main" style={bgImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto col-md-12 col-sm-12">
            <h1 className="text-center text-white">
              {" "}
              SAVED TO SAVE OTHERS AND CONNECTING THE HEARTS OF DAUGHTERS TO THE
              FATHER
            </h1>
            <p className="col-lg-8 col-md-12 col-sm-12 p-0 text-center m-auto mb-4">
              {" "}
              "When he saw the crowds, he had compassion on them because they
              were confused and helpless, like sheep without a shepherd."{" "}
              <i>Matthew 9:36 (NLT).</i>{" "}
            </p>
            <div className="col-lg-8 d-flex m-auto mt-4 learn-more-link">
              <Link to="/blog" className="m-auto">
                <button className="learn-btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
