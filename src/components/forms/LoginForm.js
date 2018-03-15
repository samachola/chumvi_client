import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import setAuthorizationTokens from '../../utils/setAuthorizationTokens';


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
               email: '',
			   password: '',
            },
			errors: {}, 
			isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

	onChange = (e) => {
			this.setState({
                data: { ...this.state.data, [e.target.name ]: e.target.value }
            });
	}

	onSubmit = (e) => {
			e.preventDefault();
			this.setState({ errors: {}, isLoading: true });
			this.props.loginRequest(this.state.data)
			.then(() => {
				this.setState({ isLoading: false });
				this.props.history.push("/dashboard");
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
								<input type="email" value={this.state.data.email} name="email" id="email" onChange={this.onChange} />
						</div>

						<div className="inputwrapper">
								<label>
									Password 
									{ errors.password && <span className="errs">{ errors.password }</span> }
								</label>
								<input type="password" value={this.state.data.password} name="password"  id="password" onChange={this.onChange} />
						</div>

						<div className="login-action">
								<input disabled={ this.state.isLoading } type="submit" value="login" />
								<a href="#">Forgot Password..?</a>
						</div>
				</form>
		);
	}
}

export default withRouter(LoginForm);