import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import bg from '../signup/video/bg.mp4';
import LoginForm from '../forms/LoginForm';
import loginRequest from '../../actions/loginActions';

class Login extends Component {
  render() {
    const { loginRequest } = this.props;
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
              <Link className="active" to="/login">login</Link>
      	  		<Link to="/signup">signup</Link>
            </div>
            <LoginForm loginRequest={loginRequest} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

export default connect(null, { loginRequest })(Login);
