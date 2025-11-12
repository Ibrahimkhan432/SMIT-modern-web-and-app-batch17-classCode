import { NavLink, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Contact page</h1>
      <NavLink to="user1">User 1</NavLink>
      <NavLink to="user2">User 2</NavLink>
      <Outlet />
    </>
  );
}
