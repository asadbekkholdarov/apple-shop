import React from "react";

const Login = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-outline-primary w-100 mb-2">
                {" "}
                <span className="fa fa-google me-2"></span>
                Sign In with Google
              </button>
              <button className="btn btn-outline-primary w-100 mb-2">
                {" "}
                <span className="fa fa-facebook me-2"></span>
                Sign In with Facebook
              </button>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="htmlForm-control w-100"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="htmlForm-text">
                  <small>We'll never share your email with anyone else.</small>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="htmlForm-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="htmlForm-control w-100"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 htmlForm-check">
                <input
                  type="checkbox"
                  className="htmlForm-check-input"
                  id="exampleCheck1"
                />
                <label className="htmlForm-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn mt-3 btn-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
