import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ForgotPassword from "./Auth/ForgotPassword";
import Home from "./Screens/Home";
import News from "./Screens/News";
import Faqs from "./Screens/FAQs";
import FIR from "./Screens/FIR";
import LaborLawCard from "./Components/LaborLawCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/news" element={<News />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/fir" element={<FIR />} />
          <Route path="/labor-laws" element={<LaborLawCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;