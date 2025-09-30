import { NavLink } from "react-router-dom";
import "./../styles/Navbar.scss";
import giraffe from "/public/img/giraffe-pic.png";

export const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <div className="navBar-left">
          <div className="nav-icon">
            <img src={giraffe} />
          </div>
          <h3>The Zoo</h3>
        </div>
        <div className="navBar-right">
          <NavLink to={"/"}>Hem</NavLink>
          <NavLink to={"/animals"}>Dina Djur</NavLink>
        </div>
      </div>
    </>
  );
};
