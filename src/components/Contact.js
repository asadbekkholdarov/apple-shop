import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center py-4 my-4">
          <h1>Have Some Qustions?</h1>
          <hr />
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <img
            height="400px"
            width="400px"
            style={{ borderRadius: "40px" }}
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />

              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <textarea
              placeholder="Write your message..."
              className="form-control"
            ></textarea>{" "}
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
