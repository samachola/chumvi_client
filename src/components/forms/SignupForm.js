import React, { Component } from 'react';

class SignupForm extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            'email': '',
            'username': '',
            'password': ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name ]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){

        return (
            <form onSubmit={ this.onSubmit }>
                <div className="inputwrapper">
                    <label>Email</label>
                    <input type="email" value={this.state.email} name="email" id="email" onChange={this.onChange} />
                </div>

                <div className="inputwrapper">
                    <label>Username</label>
                    <input type="text" value={this.state.username} name="username"  id="username" onChange={this.onChange} />
                </div>

                <div className="inputwrapper">
                    <label>Password</label>
                    <input type="password" value={this.state.password} name="password"  id="password" onChange={this.onChange} />
                </div>

                <div className="login-action">
                    <input type="submit" value="signup" />
                    <a href="#">Forgot Password..?</a>
                </div>
            </form>
        );

    }
}

export default SignupForm;