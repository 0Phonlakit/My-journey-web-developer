import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      { prop.isRegistered === false && 
        <input type="password" placeholder="Confirm Password" />
      }
      <button type="submit"> 
       { prop.isRegistered ? "Login" :  "Registered" }
      </button>
    </form>
  );
}

export default Form;
