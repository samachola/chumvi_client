import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            'email': '',
            'username': '',
			'password': '',
			'errors': {}, 
			'isLoading': false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

	onChange = (e) => {
			this.setState({ [e.target.name ]: e.target.value });
	}

	onSubmit = (e) => {
			e.preventDefault();
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignupRequest(this.state).then(
				(response) => {
					console.log(response.data);
				}
			).catch((error) => {
				console.log(error.response.data.errors);
				this.setState({ errors: error.response.data.errors, isLoading: false });
			});	
	}

	render(){
		const { errors } = this.state;
		return (
				<form onSubmit={ this.onSubmit }>
						<div className="inputwrapper">
								<label>
									Email 
									{ errors.email && <span className="errs">{ errors.email[0] }</span> }
								</label>
								<input type="email" value={this.state.email} name="email" id="email" onChange={this.onChange} />
						</div>

						<div className="inputwrapper">
								<label>
									Username 
									{ errors.username && <span className="errs">{ errors.username[0] }</span> }
								</label>
								<input type="text" value={this.state.username} name="username"  id="username" onChange={this.onChange} />
						</div>

						<div className="inputwrapper">
								<label>
									Password 
									{ errors.password && <span className="errs">{ errors.password[0] }</span> }
								</label>
								<input type="password" value={this.state.password} name="password"  id="password" onChange={this.onChange} />
						</div>

						<div className="login-action">
								<input disabled={ this.state.isLoading } type="submit" value="signup" />
								<a href="#">Forgot Password..?</a>
						</div>
				</form>
		);
	}
}

export default SignupForm;