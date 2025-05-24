import { NavLink } from "react-router-dom";
import logoMark from "../assets/logomark.svg";
const Nav = (userName) => {
  return (
    <nav>
      <NavLink to="/" aria-label="home">
        <img src={logoMark} alt="" height={30} />
        <span>Home Budget</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
