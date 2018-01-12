import React, { Component } from "react";
import { NavLink } from './components/nav/NavLink';
// import { HorizontalLoginForm } from './components/forms/HorizontalLoginForm';
import { Button } from 'antd';
import AnimatedWrapper from "./AnimatedWrapper";

class Login_C extends Component {
        
    render() {
        return (
 <header id="showcase">
                <h1 id="welcome" style={{ color: '#fff' }}>You would log in here</h1>
                <div id="buttons">
                    <div>
                        <NavLink {...this.props} to="/">
                            <Button ghost size="large" icon="login">Return to the Splash page</Button>
                        </NavLink>
                    </div>
                </div>
            </header>
        )
    }

}

const Login = AnimatedWrapper(Login_C);
export default Login;