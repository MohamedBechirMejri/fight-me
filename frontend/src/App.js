import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import React, { useContext } from "react";
import { myContext } from "./AuthContext/context";
import SuccessLogin from "./Components/SuccessLogin";
const App = () => {
  const user = useContext(myContext);
  console.log(user);
  return (
    <div className=" App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/success" element={<SuccessLogin />} />
      </Routes>
    </div>
  );
};
export default App;
