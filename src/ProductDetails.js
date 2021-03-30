import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { image_url, name, price, description } = useSelector(st => ({
    ...st.products[id]
  }));
  return (
    <>
      <h4 className="mt-4">Product details:</h4>
      <div className="row justify-content-center border">
        <div className="col-md-4">
          <h2>{name}</h2>
          <img
            className="ProductDetails-img card-img-top"
            src={image_url}
            alt={name}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5>Price:</h5>
              <p>${price}</p>
            </div>
            <p className="text-center">{description}</p>
            <CartIcons id={id} />
          </div>
          <Link to="/" className="btn btn-block btn-link">
            Go back
        </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
