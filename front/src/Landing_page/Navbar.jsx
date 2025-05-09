import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container">
          <Link class="navbar-brand" to={"/"}>
          <i class="fa-brands fa-wolf-pack-battalion" style={{padding:"0px 5px"}}></i>
          Waner
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/about"}>
                 About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/product"}>
                Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/pricing"}>
                Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/support'}>
                Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
