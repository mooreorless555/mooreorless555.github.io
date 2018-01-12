import React, { Component } from "react";
import { NavLink } from "./components/nav/NavLink"
import { Divider, Button, Tooltip } from 'antd';
import AnimatedWrapper from "./AnimatedWrapper";
import logo from './assets/img/movesU_logo.png'
import { COLLEGE_LOGOS, LINKS } from './constants.js'

class Splash_C extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <header id="showcase">
                    <img id="logo" src={logo} alt="" />
                    <h1 id="welcome" style={{ color: '#fff' }}>
                        Get notified about the epic re-release!
                    </h1>
                    {/* <div id="buttons">
                        <div>
                            <Button ghost size="large" icon="apple">Download for iOS</Button>
                        </div>
                        <div>
                            <Button ghost size="large" icon="android">Download for Android</Button>
                        </div>
                    </div>
                    <div className="spacer"></div> */}
                    <div id="buttons">
                        <div>
                            <NavLink {...this.props} to={LINKS.MAILCHIMP_SIGNUP}>
                                <Button size="large" icon="mail">Get Notified</Button>
                            </NavLink>
                        </div>
                    </div>
                    <h3 id="welcome" style={{ color: '#fff' }}>It's our mailing list. You can unsubscribe at any time.</h3>
                    <h5 id="welcome" style={{ color: '#fff' }}> Obvi not recommended, but hey. ;)</h5>
                </header>
                {/* <section id="section-d">
                    <div id="title">MovesU is now at 2 universities!</div>
                    <div id="colleges">
                        <Tooltip title="Yale University">
                            <div><img id="college" src={COLLEGE_LOGOS.YALE} alt="yale" /></div>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Harvard University">
                            <div><img id="college" src={COLLEGE_LOGOS.HARVARD} alt="harvard" /></div>
                        </Tooltip>
                         <Tooltip placement="bottom" title="Wake Forest University">
                            <div><img id="college" src={COLLEGE_LOGOS.WAKE_FOREST} alt="wake forest"/></div>
                        </Tooltip>
                        <Tooltip title="Brown University">
                            <div><img id="college" src={COLLEGE_LOGOS.BROWN} alt="brown"/></div>
                        </Tooltip> 
                    </div>
                </section> */}
                <section id="section-a">
                    <div id="title">Everything is the move.</div>
                    <p id="caption">From the <b>biggest parties</b> to the <b>smallest
                    gatherings</b> to even <b>getting dinner with your friends</b>,
                    MovesU lets you and your friends figure out what the move is.</p>
                </section>
                <section id="section-b">
                    <div id="title">Bigger Events</div>
                    <div className="spacer"></div>
                    <div id="subtitle">FOR THE HOSTS</div>
                    <p id="caption">
                        You make an event (AKA a move), invite who you want, add other hosts, choose the privacy settings, all of that.
                </p>
                    <p id="caption">
                        People who want to know what's up can <b id="h">follow your move</b> and then<br />you can <b id="h">send them notifications</b> to keep them in the loop or give status updates
                    if something happens before or during the event.
                </p>
                    <div className="spacer"></div>
                    <div id="subtitle">FOR THE GUESTS</div>
                    <p id="caption">
                        Follow the moves you're hype about and see what's going on around you all in one spot.
                    </p>
                    <p id="caption">
                        MovesU uses GPS so <b id="h">you can see how many people are physically at a move before you decide to go</b> or not. Since we're not tryna stalk, you can't see who is actually there until you both friend each other on the app.<br /><span id="small">(Also just tbt to everyone saying Going on Facebook but not actually showing up, smh)</span>
                    </p>
                </section>
                <section id="section-c">
                    <div id="title">Just getting dinner, studying or hanging out?</div>
                    <p id="caption">Let people you care about know <b>all at once</b> that you want to get
                    that 5 o' clock dinner and they can <b>+1</b> it to let you know if they're down. Unlike a text, these plans
                    are temporary like a snap so you don't need to worry about spamming the group chat.</p>
                </section>
                <section id="section-a">
                    <div id="title">Interested at all?</div>
                    <p id="caption">Sign up for <b>our newsletter</b> so we can tell you when we've re-released!</p>
                    <p>
                        <div>
                            <NavLink {...this.props} to={LINKS.MAILCHIMP_SIGNUP}>
                                <Button size="large" icon="mail">Sign Up</Button>
                            </NavLink>
                        </div>
                    </p>
                </section>
            </div>

        )
    }
}

const Splash = AnimatedWrapper(Splash_C);
export default Splash;