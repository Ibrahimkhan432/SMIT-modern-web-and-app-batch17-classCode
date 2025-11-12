import { Routes, Route } from "react-router-dom";
import HomePge from "../pages/Home";
import AboutPage from "../pages/About";
import NotFoundPage from "../pages/NotFound";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import User1 from "../pages/User1";
import User2 from "../pages/User2";
import Admin from "../pages/Admin";

function NestedRoute() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* single routing */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePge />} />
        <Route path="about" element={<AboutPage />}>
        <Route path=":id" element={<AboutPage />}/>
          <Route path=":admin" element={<Admin />} />
        </Route>
        {/* nested routin */}
        <Route path="contact" element={<Contact />}>
          <Route path="user1" element={<User1 />} />
          <Route path="user2" element={<User2 />} />
        </Route>
      </Routes>
    </>
  );
}
export default NestedRoute;
