import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? "blue" : "black",
    textDecoration:isActive?"none" : "underline",
    margin:"10px"
  });
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          margin: "10px",
          color: "white",
          fontSize: "30px",
        }}
      >
        <nav>
          <NavLink style={navStyle} to="/">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
          <NavLink style={navStyle} to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
