import React, { Component } from "react";
import Joi from "joi";
import Form from "./common/form";
import auth from "../services/authService";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  });

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
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
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", false, "password")}
            {this.renderInput("name", "Name", false)}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
