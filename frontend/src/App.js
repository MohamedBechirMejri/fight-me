import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
const App = () => {
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
