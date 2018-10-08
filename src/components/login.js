import React from "react";

export function Login(props) {
  return (
    <form role="form" id="login-user" name="loginUser">
      <fieldset name="user-info" id="user-info">
        <label>
          {" "}
          Username:
          <input type="text" class="username" name="username" required />
        </label>
        <label>
          {" "}
          Password:
          <input type="password" class="password" name="password" required />
        </label>
        <input id="existing-user" type="submit" value="Login" />
        <div id="demo-container">
          <h7 class="demo-info"> For demo account use:</h7>
          <h7 class="demo-info login"> u: demoDanny</h7>
          <h7 class="demo-info login"> p: demoFun1</h7>
        </div>
        <div class="error-message-container" />
      </fieldset>
    </form>
  );
}
