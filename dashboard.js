import authHandler from "./utils/auothorization.js";

const init = () => {
  authHandler();
};



document.addEventListener("DOMContentLoaded", init);
