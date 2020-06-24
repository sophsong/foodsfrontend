import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <h1> Signup</h1>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <ul>
            <p>
              <input
                name="name"
                placeholder="Name"
                type="text"
                // value={this.state.name}
                // onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                name="age"
                placeholder="Age"
                type="number"
                // value={this.state.age}
                // onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                name="priorities"
                placeholder="Priorities"
                type="text"
                // value={this.state.priorities}
                // onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                name="password"
                placeholder="Password"
                type="password"
                // value={this.state.password}
                // onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="submit"
                placeholder="Begin Your Food Journey"
                value="Submit"
              />
            </p>
          </ul>
        </form>
      </div>
    );
  }
}

export default Signup;
