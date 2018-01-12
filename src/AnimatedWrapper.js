import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper
 extends Component {
    constructor(props){
            super(props);

        this.state = {
            isVisible: true
        }

        this.closeComponent = (ev, destPath) => {
            ev.preventDefault();

            this.setState({
                isVisible: false
            })

            console.log(this.props);

            setTimeout(() => {
                this.props.history.push(destPath)
            }, 500)
        }

    }

 render() {
  return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={300}
                transitionName="fade">
                {this.state.isVisible ?
    <WrappedComponent {...this.props} closeComponent={this.closeComponent}/>
   : null}
   </ReactCSSTransitionGroup>
  );
 }
};
export default AnimatedWrapper;