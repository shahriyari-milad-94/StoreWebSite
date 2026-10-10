const setCookie = (data) => {
  document.cookie = `token=${data} ; max-age=${10 * 24 * 60 * 60}; path=/`;
};

const getCookie = () => {
  const cookies = document.cookie.split("; ");
  console.log(cookies);

  const tokenCookie = cookies.find((cookie) => {
    return cookie.startsWith("token=");
  });
  console.log(tokenCookie);

  if (tokenCookie) {
    const cookieArray = tokenCookie.split("=");
    console.log(cookieArray);

    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};

export { setCookie, getCookie };
