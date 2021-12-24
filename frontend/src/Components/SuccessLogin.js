import axios from "axios";
import React, { useEffect } from "react";

const fetchuser = async () => {
  const response = await axios
    .get("http://localhost:3030/getuser", { withCredentials: true })
    .catch((err) => {
      console.log(err);
      window.location("/");
      console.log("not allowed");
      window.location.href("/");
    });
  if (response && response.data) {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(response.data));
  }
};

const SucessLogin = () => {
  useEffect(() => {
    fetchuser();
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return <div>Logged in</div>;
};

export default SucessLogin;
