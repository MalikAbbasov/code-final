import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Navbar() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [bars, setBars] = useState(true);
  const { decode, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  //function for navbar scroll
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyNav(true) : setStickyNav(false);
    }
  };

  // const handleToggle = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle("dark");
  // };

  const handleBar = () => {
    setBars(!bars);
  };

  return (
    <div>
      <nav className={`navbar  ${stickyNav ? "fixed" : ""}`}>
        <div className="container" >
          <div className="page_name">
            <Link to="/">
              <h1>Natiqoglu</h1>
            </Link>
          </div>
          <ul className={bars ? "aside_nav" : "nav_responsive"}>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Ana səhifə
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Haqqımızda
            </NavLink>
            {decode ? (
              <>
                <Link to={`/profile`}>
                  <div className="user">
                    <div className="profile">
                      <h5>{decode.name}</h5>
                      <img src={decode.image} alt="" />
                    </div>
                  </div>
                </Link>
                <p
                  className="logout_none"
                  onClick={() => logOut(navigate("/"))}
                >
                  log out{" "}
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </p>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Register
                </NavLink>

                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active " : ""
                  }
                >
                  <p>Login</p>
                  <i className="fa-solid fa-user"></i>{" "}
                </NavLink>
              </>
            )}
            {decode && decode.role === "admin" ? (
              <>
                <NavLink
                  to="/news"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {" "}
                  News
                </NavLink>
                <NavLink
                  to="/user"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {" "}
                  User
                </NavLink>
              </>
            ) : null}

            <i onClick={handleBar} className="fa-solid fa-x"></i>
          </ul>
          <div className="pages">
            {decode ? (
              <>
                <Link to={`/profile`}>
                  <div className="user_resp">
                    <div className="profile">
                      <h5>{decode.name}</h5>
                      <img src={decode.image} alt="" />
                    </div>
                  </div>
                </Link>
                <p className="logout" onClick={() => logOut(navigate("/"))}>
                  log out{""}
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </p>
              </>
            ) : (
              <></>
            )}

            <i onClick={handleBar} className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
