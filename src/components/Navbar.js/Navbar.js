import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="m-0 p-0 container-fluid">
      {" "}
      {/*main container*/}
      <nav class="navbar navbar-expand-md navbar-dark bg-primary   m-0 py-1 px-3 ">
        <div className="container-fluid ">

          <div class="w-100  d-md-flex   ">
            {/* logo_company */}

            <div className="d-flex justify-content-between w-100  ">
              <div className="flex-row d-flex  mt-1 align-items-center">
                <a class="navbar-brand" href="#">
                  <img
                    src="/logo192.png"
                    alt="Avatar Logo"
                    style={{ width: "30px" }}
                    class="rounded-pill"
                  />
                </a>
                <a class="navbar-brand fs-sm-4" href="javascript:void(0)">
                Springdale Public School
                </a>
              </div>

              <button
                class="navbar-toggler w-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>

        
            {/* Links container */}
            <div
              class="collapse navbar-collapse  d-md-flex justify-content-md-end  w-100"
              id="mynavbar"
            >
              <ul class="navbar-nav  m-0 p-0  ">
                <li class="nav-item    text-start">
                  <Link className="nav-link  fs-sm-1 fs-md-3  px-1  px-md-4 " to="/">
                    Home
                  </Link>
                </li>


                <li class="nav-item text-start">
                  <Link class="nav-link  px-md-4 " to={"/contact"}>
                    Contact
                  </Link>
                </li>
                <li class="nav-item text-start">
                  <Link class="nav-link px-md-4 " to={"/gallery"}>
                    Gallery
                  </Link>
                </li>

                {/* dropdown  */}
                <li className="dropdown nav-item text-start ">
                  <Link
                    className="dropdown-toggle nav-link px-md-4   "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Admission
                  </Link>
                  <ul className=" dropdown-menu">
                    <li>
                      <Link className=" dropdown-item " to={"/Faculty"}>
                        Faculty
                      </Link>
                    </li>
                    <li>
                      <Link className=" dropdown-item " to={"/student"}>
                        Students
                      </Link>
                    </li>
                    <li >
                      <Link className="dropdown-item " to={"/academic"}>
                        Academics
                      </Link>
                    </li>
                  </ul>
                </li>


                <li class="nav-item text-start">
                  <Link class="nav-link  px-md-4 " to={"/about"}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
            {/* Links container end  */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
