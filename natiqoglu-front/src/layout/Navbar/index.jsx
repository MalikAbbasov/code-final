import React, { useContext } from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Navbar() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [bars, setBars] = useState(true);
  const { decode,logOut } = useContext(UserContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleBar = () => {
    setBars(!bars);
    console.log(bars);
  };

  return (
    <div>
      <nav id="navbar">
        <div className="container">
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
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
            {decode ? (
              <>
                <h1>profile</h1>
                <p onClick={()=>logOut()}>log out</p>
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
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Login{" "}
                </NavLink>
              </>
            )}
            {
              decode && decode.role === "admin" ? 
              <NavLink
              to="/adminpanel"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {" "}
              Admin
            </NavLink>
              : null
            }


            <i onClick={handleBar} className="fa-solid fa-x"></i>
          </ul>
          <div className="pages">
            <i onClick={handleBar} className="fa-solid fa-bars"></i>
            <div className="dark_mode">
              <button onClick={handleToggle}>
                {darkMode ? (
                  <i className="fa-solid fa-moon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star st"></i>
                  </i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
