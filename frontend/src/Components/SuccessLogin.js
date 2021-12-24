import axios from "axios";
import React, { useEffect } from "react";

const fetchuser = async () => {
  const response = await axios
    .get("https://aqueous-falls-70675.herokuapp.com/getuser", { withCredentials: true })
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
function SucessLogin() {
  useEffect(() => {
    fetchuser();
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return <div>Logged in</div>;
}
export default SucessLogin;
