import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;

  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    if (cookie && url.includes("auth")) {
      location.assign("index.html");
    } else {
      location.assign("auth.html");
    }

    return false;
  }
};

export default authHandler;