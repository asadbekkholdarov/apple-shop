import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "./../Data";

const Product = () => {
  const cardItem = (item) => {
    return (
      <>
        <div
          className="card mb-5 py-3 text-center"
          key={item.id}
          style={{ width: "18rem" }}
        >
          <img className="card-img-top" src={item.img} alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">
              <b>$ </b>
              {item.price}
            </p>
            <NavLink to={`/products/${item.id}`} className="btn btn-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
