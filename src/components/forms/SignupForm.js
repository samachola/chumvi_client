import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Notification, { notify } from 'react-notify-toast';

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
			this.props.userSignupRequest(this.state)
			.then(() => { 
				notify.show("this is sample text", "custom", 2000);
				this.props.history.push("/login");
			})
			.catch((error) => {
				console.log(error.response);
				if (error){
					this.setState({ errors: error.response.data.errors, isLoading: false });
				}
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

export default withRouter(SignupForm);