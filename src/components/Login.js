import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        
        <div className="login">
        <h1>Login</h1>
        <div className="auth-form">
          <ul>
            <form>
              <p>
                  <input type="text" placeholder="Username" name="name" />
              </p>
              <p>
                <label>
                  <input type="text" placeholder="Password" name="name" />
                </label>
              </p>
              <input type="submit" value="Submit" />
            </form>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
