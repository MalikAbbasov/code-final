import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./navbar.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Navbar() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { id } = useParams();
  const [bars, setBars] = useState(true);
  const [user, setUser] = useState([]);
  const { decode, logOut, token } = useContext(UserContext);

  useEffect(() => {
    getUsersById();
  }, []);

  async function getUsersById() {
    const data = await fetch(`http://localhost:3400/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    setUser(res);
  }

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
                <div>
                  <img src={user.image} alt="" />
                  <p>{user.name}</p>
                  <p>salam</p>
                  {console.log(user.name)}
                </div>
                <p onClick={() => logOut()}>log out</p>
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
            {decode && decode.role === "admin" ? (
              <NavLink
                to="/adminpanel"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {" "}
                Admin
              </NavLink>
            ) : null}

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
