import React from "react";
import Layout from "../components/Layout";
import "./about.styles.scss";

const AboutPage = () => (
  <>
    <Layout>
      <main className="about-page">
        <section className="people-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-sm-12 ">
                <h2 className="h2 text-center">About Us</h2>
                <p className="about-caption">
                  OUR SLOGAN : HELP IS OUR CALLING
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="vision">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-12">
                <h1 className=" h1 text-center">Our Vision</h1>
                <p className="p">
                  We are daughters of Zion with the mandate of connecting and
                  re-uniting hearts back to God. Saved to save others and the
                  lost sheep; To save others from the shackles of darkness and
                  also sent to the saved that are lost with the help of the Holy
                  spirit working through the Charity, Self development, Health
                  and Relatonship arm of Kingdom helps. Matthew 9:36
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mission">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-12">
                <h1 className="h1 text-center">Our Mission</h1>
                <p className="p">
                  Kingdom Helps is a nondenominational initiative that renders
                  help as God representatives on earth on behalf of God's
                  Kingdom and our drive is to help till our last breath. Our
                  passion and zeal is for the lost. Our strategy is to connect
                  and reunite hearts back to God by teaching and impacting the
                  sincere milk of God's word.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="values">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-12">
                <h1 className="h1 text-center">Our Values</h1>
                <p className="p ">
                  <p className="text-center">Help is our calling</p>
                  Holiness & Purity! There is a message in every mess, we must
                  find it and bless lives! Ready to help till our last breath,
                  never giving up on a soul. Holy Spirit is our core value!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  </>
);

export default AboutPage;
