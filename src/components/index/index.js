import React, { Component }from 'react'
import bg from './video/bg.mp4';

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
                            <button className="active">Login</button>
                            <button>SignUp</button>
                        </div>

                        <form action="#">
                            <div className="inputwrapper">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="inputwrapper">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" />
                            </div>

                            <div className="login-action">
                                <input type="submit" value="login" />
                                <a href="#">Forgot Password..?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;