// import { postData } from "./utils/httpReq.js";
// import { setCookie } from "./utils/cookie.js";
// import authHandler from "./utils/auothorization.js";

import { postData } from "./utils/httpReq.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  // const userName = inputBox[0].value;
  // const password = inputBox[1].value;  

  const data = {
    username: "emilys",
    password: "emilyspass",
  };

  const response = await postData("auth/login", data);
  console.log(response);
};
loginButton.addEventListener("click", submitHandler);

// const submitHandler = async (event) => {
//   event.preventDefault();

//   const username = inputBox[0].value;
//   const password = inputBox[1].value;

//   const response = await postData("auth/login", { username, password });

//   console.log(response);

//   setCookie(response.accessToken);
//   location.assign("index.html");
// };


// document.addEventListener("DOMContentLoaded", authHandler)
