export const userService = {
  login,
  logout
};

function login(username, password) {

  console.log(process.env.REACT_APP_API_HOST)
  const credentials = {
    client: {
      id: process.env.REACT_APP_CLIENT_ID,
      secret:process.env.REACT_APP_SECRET
    },
    auth: {
      tokenHost: process.env.REACT_APP_API_HOST,
      tokenPath: "/api/o/token/",
      authorizePath: "/api/o/authorize"
    }
  };

  const oauth2 = require("simple-oauth2").create(credentials);
  const tokenConfig = {
    username: username,
    password: password,
    scope: "read write"
  };

  var promise1 = oauth2.ownerPassword
    .getToken(tokenConfig)
    .then(result => {
      const accessToken = oauth2.accessToken.create(result);

      let user = {
        username: username,
        token: accessToken.token.access_token
      };

      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch(error => {
      console.log(error.message);
      return "Username or password is incorrect";
    });

  return promise1;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
