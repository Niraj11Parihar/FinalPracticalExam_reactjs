import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="container bg-transparent py-2">
        <div className="row align-items-center justify-content-between">
          {/* Logo Section */}
          <div className="col-md-6 text-center text-md-start">
            <img
              src="https://hotellerv6-5.b-cdn.net/ski/wp-content/uploads/sites/4/2023/09/logo-white2.png"
              height="150px"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 ">
            <ul className="d-flex justify-content-center justify-content-md-evenly list-unstyled mb-0 bg-transparent border rounded">
              <li className="mx-3">
                <Link
                  to="/home"
                  className=" text-light fw-bolder text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li className="mx-3">
                <Link
                  to="/registrationForm"
                  className=" text-light fw-bolder text-decoration-none"
                >
                  Reservation
                </Link>
              </li>
              <li className="mx-3">
                <Link
                  to="/reservationList"
                  className=" text-light  fw-bolder text-decoration-none"
                >
                  Reservation List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
