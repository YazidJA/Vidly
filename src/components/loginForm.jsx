// Reusable Form
import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

// Define the data of the form
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  // Define the schema for data validation here
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // Define what happens when the submit button is pressed
  doSubmit = () => {
    const username = this.state.data.username;
    const password = this.state.data.password;
    console.log(`Submitted, Username: ${username}, Password: ${password}`);
  };

  // Customize the fields
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
