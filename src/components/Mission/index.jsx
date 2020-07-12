import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function Mission() {
  return (
    <div className="mission">
      <div className="container">
        <div className="">
          <h3> Why Kingdom Helps? </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-1">
              <header>
                <span className="cube"></span>Our Purpose
              </header>
              <article>
                To save the lost and connect the hearts of the daughters to the
                Father. Also to run and deliver God's burden per season.
              </article>
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-2">
              <header>
                <span className="cube"></span>Mission
              </header>
              <article>
                Sent to the saved that are lost. To become the best help for
                God's kingdom at such a time as this!
              </article>{" "}
              <br />
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 no-gutters">
            <div className="mission-card" id="card-3">
              <header>
                <span className="cube"></span>Values
              </header>
              <article>
                Help is our calling Holiness, Righteousness and Purity. Ready to
                help till our last breath.
              </article>{" "}
              <br />
              <Link to="/about">
                {" "}
                Read More <i className="fa fa-angle-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
