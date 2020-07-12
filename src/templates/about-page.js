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
                  Kingdom Helps is a nondenominational initiative that renders
                  help as God representatives on earth on behalf of God's
                  Kingdom and our drive is to help till our last breath. Our
                  passion and zeal is for the lost. Our strategy is to connect
                  and reunite hearts back to God by teaching and impacting the
                  sincere milk of God's word.
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
                  We are not denominational and never want to be. As we move
                  faster to wiping away the cosmos, we intensify the need to
                  break denominational barriers and bring as many million souls
                  to the reality of heaven and hell thereby defeating the
                  struggling lord of this world.
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
                  Help is our calling Holiness & Purity There is a message in
                  every mess, we must find it and bless lives! Ready to help
                  till our last breath Never giving up on a soul HolySpirit is
                  our core value
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
