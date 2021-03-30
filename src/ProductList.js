import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";

function ProductList() {
  const products = useSelector(st => st.products);
  const productCards = Object.keys(products).map(id => (
    <div className="col-md-3 mb-3 mt-5" key={id}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </h4>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h1 className="mt-3">Welcome to Shoply!</h1>
      <h4>Look at all of our beautiful products!</h4>
      <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;
