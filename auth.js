import { getCookie, setCookie } from "./utils/cookie.js";

import { postData } from "./utils/httpReq.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const data = {
    username: "emilys",
    password: "emilyspass",
  };

  const response = await postData("auth/login", data);
  console.log(response);

  // document.cookie = `token=${response.accessToken}; max-age=${24 * 60 * 60}; path:/`;
  setCookie(response.accessToken);
  location.assign("index.html");
};

const init = () => {
  const cookie = getCookie();
  console.log(cookie);

  if (cookie) {
    location.assign("index.html");
  }
  // console.log(document.cookie);
};

loginButton.addEventListener("click", submitHandler);

document.addEventListener("DOMContentLoaded", init);
