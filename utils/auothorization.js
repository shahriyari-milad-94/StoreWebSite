// import { getCookie } from "./cookie.js";

// const authHandler = () => {
//   const cookie = getCookie();
//   const url = location.href;
//   if (cookie && url.includes("auth")) {
//     location.assign("index.html");
//     return false;
//   } else if (!cookie && url.includes("dashboard")) {
//     location.assign("auth.html");
//     return false;
//   }
// };

// export default authHandler;

import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;
  console.log(cookie, url);

  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
<<<<<<< HEAD
    location.assign("auth.html");
=======
    location.assign("index.html");
>>>>>>> c6914ba (refactor: centralize authentication and route protection logic)
    return false;
  }
};

export default authHandler;
