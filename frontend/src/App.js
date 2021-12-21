import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
const App = () => {
  return (
    <div className=" App">
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </div>
  );
};
export default App;
