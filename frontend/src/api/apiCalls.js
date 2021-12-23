const RedirectToGoogle = async () => {
  const googleLoginUrl = "http://localhost:3030/login/google";
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
  const discordLoginUrl = "http://localhost:3030/login/discord";
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
export { RedirectToGoogle, RedirectToDiscord };
