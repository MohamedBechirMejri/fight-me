import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import React , {useContext} from "react";
import { myContext } from "./AuthContext/context";
const App = () => {
  const  user  = useContext(myContext);
  return (
    <div className=" App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};
export default App;
