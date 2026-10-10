import authHandler from "./utils/auothorization.js";
import { setCookie } from "./utils/cookie.js";
import { postData } from "./utils/httpReq.js";
import validateForm from "./utils/validation.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const validation = validateForm(username, password);

  if (!validation) return;

  const data = {
    username: "emilys",
    password: "emilyspass",
  };

  const response = await postData("auth/login", data);
  console.log(response);

  setCookie(response.accessToken);
  location.assign("index.html");
};

authHandler();

loginButton.addEventListener("click", submitHandler);

document.addEventListener("DOMContentLoaded", authHandler);
