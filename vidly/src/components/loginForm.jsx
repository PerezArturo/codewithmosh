import React from "react";
import Joi from "joi";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.username, data.password);
      localStorage.setItem("token", jwt);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { errors } = this.state;
        const error = { ...errors };
        error.username = ex.response.data;
        this.setState({ errors: error });
      }
    }
  };

  render() {
    return (
      <div
        className="card mt-5"
        style={{
          height: 550,
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: 10,
          padding: 50,
          borderWidth: 10,
        }}>
        <div className="card-body">
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Login</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", false, "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
