import React from "react";
import { Link } from "gatsby";
import "./Navbar.styles.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar  is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{ width: "100%" }}>
            <Link
              to="/"
              className="navbar-item"
              style={{
                float: "left",
                display: "block",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#f02424",
              }}
              title="Logo"
              id="nav__item"
            >
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
              <span>Kingdom Helps</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/" id="nav__item" title="Home">
                Home
              </Link>
              <Link
                className="navbar-item"
                to="/about"
                id="nav__item"
                title="About"
              >
                About
              </Link>

              <Link
                className="navbar-item"
                to="/blog"
                id="nav__item"
                title="Blog"
              >
                Blog
              </Link>
              <Link
                className="navbar-item"
                to="/team"
                id="nav__item"
                title="Seminars"
              >
                Seminars
              </Link>

              {/* <Link className="navbar-item" to="/team" id="nav__item">
                Our Team
              </Link> */}
              <Link
                className="navbar-item"
                to="/team"
                id="nav__item"
                title="Gallery"
              >
                Gallery
              </Link>

              <Link
                className="navbar-item"
                to="/contact"
                id="nav__item"
                title="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
