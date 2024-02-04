import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./navbar.css";

export const Navbar = (): JSX.Element => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const authContext = useContext(AuthContext);

  const isActive = ({ isActive }: { isActive: boolean }): string =>
    `nav-item nav-link ${isActive ? "active" : ""}`;

  const onLogout = (): void => {
    authContext?.startLogOutWithButton();
  };

  return (
    <header className="header_container">
      <div className="header_container_logo">
        <Link className="" to="/">
          HeroesApp
        </Link>
        <FaBars id="bars" onClick={() => setSidebar(!sidebar)}></FaBars>
      </div>

      <nav
        className={
          sidebar ? "header_container_nav sidebar-open" : "header_container_nav"
        }
      >
        <ul className="header_container_nav_list">
          <li>
            <NavLink className={isActive} to="/index">
              Home
            </NavLink>

            <NavLink className={isActive} to="/index?q=Marvel%20Comics">
              Marvel
            </NavLink>

            <NavLink className={isActive} to="/index?q=DC%20Comics">
              DC
            </NavLink>

            <NavLink className={isActive} to="/search">
              Search
            </NavLink>
          </li>

          <li>
            <h2 className="">{authContext?.displayName}</h2>
            <button className="" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
