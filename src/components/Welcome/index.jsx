import React from "react";

import "./styles.scss";

export default function Welcome() {
  return (
    <>
      <div className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center mt-5">
                {" "}
                Welcome to Kingdom Helps: <strong>
                  Help is our calling!
                </strong>{" "}
              </h3>
              <p className="text-center col-lg-6 m-auto">
                We are a platform focused on re-uniting hearts back to God and
                saving the lost. Raising women who will have a strong
                relationship with God and walk in purpose as planned by God
                before the foundations of the world. We want to help the Kingdom
                of God till we drop our last breath showing forth God's love to
                humanity.
              </p>
              <div className="welcome-div">
                {/* <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1594568416/DSC_9202.jpg"
                  alt="welcome"
                  className="welcome-img"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
