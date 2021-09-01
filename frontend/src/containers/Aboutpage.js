import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Mansion from "../assets/displaypics/Mansion.jpg";
import { GiFamilyHouse } from "react-icons/gi";

const Aboutpage = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/realtors/topseller`,
          config
        );
        setTopSeller(res.data);
      } catch (err) {}
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/realtors/`,
          config
        );
        setRealtors(res.data);
      } catch (err) {}
    };

    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img className="about__display__image" src={realtor.photo} alt="" />
          </div>
          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img className="about__display__image" src={seller.photo} alt="" />
          </div>
          <h3 className="about__topseller">Top Seller:</h3>
          <p className="about__realtor">{seller.name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className="about">
      <Helmet>
        <title>TuCasa- About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
        <h1 className="about__heading">
          About TuCasa <GiFamilyHouse />{" "}
        </h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the best home that suits you!
            </h2>
            <p className="about__paragraph">
              TuCasa is building a better way to do business in real estate, by
              creating sustainable and predictable systems and models to
              facilitate success for top-producing agents looking to take their
              business to the next level. We provide an exciting opportunity for
              goal-oriented real estate agents by building incomparable success
              for you, your business, and your team
            </p>
            <div className="about__display">
              <img className="about__display__image" src={Mansion} alt="" />
            </div>
            <p className="about__paragraph">
              Leveraging the most emergent technologies and social media
              strategies, TuCasa envisions itself as more than just a real
              estate brokerage; it is a lifestyle company committed to informing
              and connecting global communities
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet our awesome team!</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default Aboutpage;
