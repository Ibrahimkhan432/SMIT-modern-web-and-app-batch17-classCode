import {  Routes,Route } from "react-router-dom";
import HomePge from "../pages/Home";
import AboutPage from "../pages/About";
import NotFoundPage from "../pages/NotFound";
import Signup from "../pages/Signup";
import LoginPage from "../pages/Login";
import AuthPage from "../pages/Auth";
import FirstApi from "../pages/FirstApiFetchData/FirstApiFetchData";
import Counter from "../pages/Counter";


function RouterPage() {
  return (
      <Routes>
        <Route  path="*" element={<NotFoundPage/>}  />
        <Route  path="/" element={<HomePge/>}  />
        <Route  path="about" element={<AboutPage/>}  />
        <Route  path="signup" element={<Signup/>}  />
        <Route  path="login" element={<LoginPage/>}  />
        <Route  path="auth" element={<AuthPage/>}  />
        <Route  path="api" element={<FirstApi/>}  />
        <Route  path="counter/:myName" element={<Counter/>}  />
      </Routes>
  );
}
export default RouterPage;
