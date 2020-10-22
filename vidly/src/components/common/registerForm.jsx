import React, { Component } from 'react';
import Joi from 'joi'
import Form from './form';

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: '' },
        errors: {}
    }

    schema = Joi.object({
        username: Joi.string().email({ tlds: { allow: false } }).required().label('Username'),
        password: Joi.string().min(5).required().label('Password'),
        name: Joi.string().required().label("Name")
    })

    doSubmit = () => {
        console.log("Registered")
    }

    render() {
        return (
            <div className="card mt-5" style={{ height: 550, borderColor: 'black', borderStyle: 'solid', borderRadius: 10, padding: 50, borderWidth: 10 }}>
                <div className="card-body">
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", false, "password")}
                        {this.renderInput("name", "Name", false)}
                        {this.renderButton('Login')}
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;