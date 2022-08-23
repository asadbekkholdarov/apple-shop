import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="Display-1 text-primary">About US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              totam repellat vero, corporis rerum tempora velit voluptates.
              Rerum non aliquam fugiat nemo illo vero sapiente ducimus tempore
              harum doloribus fugit suscipit nulla quibusdam molestias autem
              repellat reiciendis reprehenderit, qui aliquid facilis velit
              necessitatibus! Facere, eos corrupti voluptates iure sapiente
              consectetur! Sed em minus praesentium aperiam? Repudiandae autem
              quisquam, modi, praesentium consequatur quam quod dolorem in error
              aliquid labore doloremque. Nostrum adipisci, id quasi, obcaecati
              molestiae porro possimus soluta velit quos, aspernatur similique
              quo et fuga? Quasi temporibus similique tempore expedita facilis
              dolores, libero dignissimos rem ullam repellendus.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/images/about.png"
              className="img-fluid"
              alt="about image"
              height="450px"
              width="450px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
