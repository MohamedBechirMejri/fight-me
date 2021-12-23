import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import React , {useContext} from "react";
import { myContext } from "./AuthContext/context";
import Login from "./Components/Login";
const App = () => {
  const user = useContext(myContext);
  console.log(user);
  return (
    <div className=" App">
      <Header />
      <Login/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};
export default App;
