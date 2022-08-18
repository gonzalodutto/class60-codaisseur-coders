import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "black", fontWeight: "bold" } : undefined
        }
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/login"
        style={({ isActive }) =>
          isActive ? { color: "black", fontWeight: "bold" } : undefined
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export { Navbar };
