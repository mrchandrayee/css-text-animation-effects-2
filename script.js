const replayButton = document.querySelector("#replay");
const app = document.querySelector(".app");

replayButton.addEventListener("click", () => {
  app.classList.add("replay");
  // Force a style/layout flush so CSS animations can be restarted.
  void app.offsetWidth;
  app.classList.remove("replay");
});
