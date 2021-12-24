import axios from "axios";

const get_game_list = async () => {
  const games_api = "https://aqueous-falls-70675.herokuapp.com/api/v1/collect/games/GamesAvailable";
  axios.get(games_api).then((response) => {
    if (response.status === 201) {
     var games = {
       games:response.data.results
     };
      localStorage.setItem("games", JSON.stringify(games));
    }
  })
};

const RedirectToGoogle = async () => {
  const googleLoginUrl = "https://aqueous-falls-70675.herokuapp.com/login/google";
  const newWindow = window.open(
    googleLoginUrl,
    "_blank",
    "width=500,height=600"
  );
  if (newWindow) {
    const timer = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(timer);
        window.location.reload();
      }
    }, 500);
  }
};
const RedirectToDiscord = async () => {
  const discordLoginUrl = "https://aqueous-falls-70675.herokuapp.com/login/discord";
  const newWindow = window.open(
    discordLoginUrl,
    "_blank",
    "width=500,height=600"
  );
  if (newWindow) {
    const timer = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(timer);
        window.location.reload();
      }
    }, 500);
  }
};
const logout = async () => {
  localStorage.removeItem("user");
  axios
    .get("https://aqueous-falls-70675.herokuapp.com/logout", { withCredentials: true })
    .then((res) => {
      if (res.data === "loggedout") {
        window.location.href = "/";
      }
    });
};
export { RedirectToGoogle, RedirectToDiscord, logout, get_game_list };
