import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const card = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      <div className="card__header">
        <img
          className="card__header__photo"
          src={props.photoMain}
          alt="House"
        />
      </div>
      <p className="card__location">
        {props.address}, {props.city}, {props.province}
      </p>
      <div className="row">
        <div className="col-2-of-3">
          <p className="card__info">Price: ${numberWithCommas(props.price)}</p>
          <p className="card__info">Bedrooms: {props.bedrooms}</p>
          <p className="card__info">Bathrooms: {props.baths}</p>
        </div>
        <div className="col-1-of-3">
          <p className="card__saletype">{props.sale_choice}</p>
          <p className="card__hometype">{props.houseType}</p>
          <p className="card__sqft">Sqft: {props.sqft}</p>
        </div>
      </div>
      <Link className="card__link" to={`/ListingDetails/${props.slug}`}>
        View Listing
      </Link>
    </div>
  );
};

card.propTypes = {
  title: PropTypes.string.isRequired,
  photoMain: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  baths: PropTypes.string.isRequired,
  sale_choice: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  sqft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default card;
