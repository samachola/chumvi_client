import React, { Component }from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bg from './video/bg.mp4';
import SignupForm from '../forms/SignupForm';
import userSignupRequest from '../../actions/signupActions';

class Signup extends Component{

    render(){
        const { userSignupRequest } = this.props;
        return (
            <div className="ch-login">
                <div className="intro">
                    <video loop muted autoPlay className="fullscreen-bg__video">
                        <source src={bg} type="video/mp4" />
                    </video>                   
                </div>

                <div className="forms">
                    <div className="logo">
                        <h2>chumvi</h2>
                    </div>

                    <div className="form">
                        <div className="tab">
                            <button>Login</button>
                            <button className="active">SignUp</button>
                        </div>
                        <SignupForm  userSignupRequest={userSignupRequest}/>
                    </div>
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);