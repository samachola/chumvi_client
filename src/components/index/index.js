import React, { Component }from 'react'
import bg from './video/bg.mp4';

import SignupForm from '../forms/SignupForm';

class Index extends Component{

    render(){
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
                        <SignupForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;