import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { applyDiscount } from "./actions";
import CartIcons from "./CartIcons";

function Cart() {
  const [discount, setDiscount] = useState("");
  const dispatch = useDispatch();
  const {
    cartItems,
    cartValue,
    discountAmount,
    discountApplied,
    products
  } = useSelector(st => st);

  const handleChange = evt => {
    setDiscount(evt.target.value);
  };

  const handleDiscount = evt => {
    evt.preventDefault();
    dispatch(applyDiscount(discount));
    setDiscount("");
  };

  const renderTable = () => {
    const itemRows = Object.keys(cartItems).map(id => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td className="text-center align-middle">${products[id].price}</td>
        <td className="text-center align-middle">{cartItems[id]}</td>
        <td>
          <CartIcons id={id} />
        </td>
      </tr>
    ));

    return (
      <>
        <h1 className="mt-5">Your shopping cart:</h1>
        <table className="table table-bordered table-striped mt-4">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{itemRows}</tbody>
        </table>
      </>
    );
  };

  return (
    <>
      {Object.keys(cartItems).length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <div>
          {renderTable()}
          <p>
            Total: ${cartValue}
            {discountApplied ? (
              <span className="text-success">
                - You saved {(discountAmount * 100).toFixed(0)}%!
              </span>
            ) : null}
          </p>

          <form onSubmit={handleDiscount} className="form-inline">
            <label htmlFor="discount">Discount:</label>
            <input
              id="discount"
              value={discount}
              onChange={handleChange}
              name="discount"
              type="text"
              className="form-control ml-2 mr-2"
            />
            <button className="btn btn-primary">Apply Discount</button>
          </form>
        </div>

      )}
      < Link to="/" className="btn btn-block btn-link" >
        Go to product list
</Link >
    </>
  )
}

export default Cart;
