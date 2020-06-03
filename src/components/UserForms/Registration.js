import React, { Component } from 'react'
import './UserForms.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registration_errors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log("User Registered");
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="registration">
                Register
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type="password_confirmation" 
                        name="password_confirmation" 
                        placeholder="Confirm Password" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required 
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
