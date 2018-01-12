import React, { Component } from "react";
import { NavLink } from '../../components/nav/NavLink';
import { Button } from 'antd';
import AnimatedWrapper from "../../AnimatedWrapper";

class NotFound_C extends Component {

    render() {
        return (
            <header id="showcase">
                <h1 id="welcome" style={{ color: '#fff' }}>404: Page Not Found. Yikes! Get out of here!</h1>
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

const NotFound = AnimatedWrapper(NotFound_C);
export default NotFound;