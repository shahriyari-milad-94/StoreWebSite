const validateUsername = (username) => {
  const regex = /^[a-zA-z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  console.log(username, password);
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Username is not validate");
  } else if (!passwordResult) {
    alert("Password must be between 4 and 20 characters");
  }
};

export default validateForm;
