import UserProfile from "./Components/UserProfile.js";
import Background from "./Components/Background.js";
import Navigationbar from "./Navbar.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          {/* if the route is to /home, it will show the Home page */}
          <Route path="/userprofile" element={<UserProfile />} />
          {/* if the route is to /userprofile it will show the main page*/}
          <Route path="/background" element={<Background />} />
          {/* if the route is to /background it will show the background page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}