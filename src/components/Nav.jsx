import { Form, NavLink } from "react-router-dom";
import logoMark from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/16/solid";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="home">
        <img src={logoMark} alt="" height={30} />
        <span>Home Budget</span>
      </NavLink>

      {/* Deleting User Account */}
      
      {userName && (
        <Form
          method="POST"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Do you want to delete the user and all user Data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span> <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
