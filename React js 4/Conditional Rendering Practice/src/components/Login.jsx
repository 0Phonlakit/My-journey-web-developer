import React from "react";

var isLoggedIn = false;

function Login() {
      return (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>)
};

export default Login;