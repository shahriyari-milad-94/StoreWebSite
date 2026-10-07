// const setCookie = (data) => {
//   document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`;
// };

// const getCookie = () => {
//   const cookies = document.cookie.split("; ");

//   const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));

//   if (tokenCookie) {
//     const cookieArray = tokenCookie.split("=");
//     return {
//       [cookieArray[0]]: cookieArray[1],
//     };
//   }


//   return false;
// };

// export { setCookie, getCookie };
