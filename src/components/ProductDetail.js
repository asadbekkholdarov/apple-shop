import React from "react";
import { useParams } from "react-router";
import DATA from "../Data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/index";
import { delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const priod = useParams();
  const proDetail = DATA.filter((x) => x.id == priod.id);
  const product = proDetail[0];
  const dispatch = useDispatch();
  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      setCartBtn("Add To Cart");
      dispatch(delItem(product));
    }
  };
  return (
    <>
      <div className="container my-5 py-3 ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img height="500px" src={product.img} alt={product.title} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2>$ {product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
