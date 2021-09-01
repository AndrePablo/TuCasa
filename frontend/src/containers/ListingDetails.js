import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

const ListingDetails = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:8000/api/listings/${slug}`, config)
      .then((res) => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  useEffect(() => {
    const id = listing.realtor;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://localhost:8000/api/realtors/${id}`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {});
    }
  }, [listing.realtor]);

  const displayInteriorImages = () => {
    let images = [];

    images.push(
      <div key={1} className="row">
        <div className="col-1-of-3">
          {listing.photo1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo1}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo2 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo2}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo3 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo3}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={2} className="row">
        <div className="col-1-of-3">
          {listing.photo4 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo4}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo5 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo5}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo6 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo6}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={3} className="row">
        <div className="col-1-of-3">
          {listing.photo7 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo7}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo8 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo8}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo9 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo9}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={4} className="row">
        <div className="col-1-of-3">
          {listing.photo10 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo10}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo11 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo11}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo12 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo12}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={5} className="row">
        <div className="col-1-of-3">
          {listing.photo13 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo13}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo14 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo14}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo15 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo15}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={6} className="row">
        <div className="col-1-of-3">
          {listing.photo16 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo16}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo17 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo17}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo18 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo18}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={7} className="row">
        <div className="col-1-of-3">
          {listing.photo19 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo19}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo20 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo20}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3"></div>
      </div>
    );

    return images;
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title>TuCasa- Listing | {`${listing.title}`}</title>
        <meta name="description" content="Listing detail" />
      </Helmet>
      <div className="listingdetail__header">
        <h1 className="listingdetail__title">{listing.title}</h1>
        <p className="listingdetail__location">
          {listing.city}, {listing.province}, {listing.postalCode}
        </p>
      </div>
      <div className="row">
        <div className="listingdetail__breadcrumb">
          <Link className="listingdetail__breadcrumb__link" to="/">
            Home
          </Link>{" "}
          / {listing.title}
        </div>
      </div>
      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={listing.photoMain}
              alt=""
            />
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={realtor.photo}
              alt=""
            />
          </div>
          <h3 className="listingdetail__realtor">{realtor.name}</h3>
          <p className="listingdetail__contact">{realtor.phone}</p>
          <p className="listingdetail__contact">{realtor.email}</p>
          <p className="listingdetail__about">{realtor.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Home Type: {listing.houseType}
            </li>
            <li className="listingdetail__list__item">Price: ${price}</li>
            <li className="listingdetail__list__item">
              Bedrooms: {listing.bedrooms}
            </li>
            <li className="listingdetail__list__item">
              Bathrooms: {listing.baths}
            </li>
            <li className="listingdetail__list__item">
              Square Feet: {listing.sqft}
            </li>
          </ul>
        </div>
        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Sale Type: {listing.sale_choice}
            </li>
            <li className="listingdetail__list__item">
              Address: {listing.address}
            </li>
            <li className="listingdetail__list__item">City: {listing.city}</li>
            <li className="listingdetail__list__item">
              Province: {listing.province}
            </li>
            <li className="listingdetail__list__item">
              Postal Code: {listing.postalCode}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="listingdetail__description">{listing.description}</p>
      </div>
      {displayInteriorImages()}
    </div>
  );
};

export default ListingDetails;
