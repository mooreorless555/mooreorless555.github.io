import React from 'react';
import { Link } from 'react-router-dom';

export class NavLink extends React.Component {


    constructor(props){
        super(props);
        console.log(this.props);

        this.url = this.props.to;
    }

    handleClick(e) {
        this.props.closeComponent(e, this.url);
    }


    render() {
        return (
            <span>
            {!this.url.startsWith('http') ?
            <div to={this.url} onClick={e => {this.handleClick(e)}}>{this.props.children}</div>
            :
            <a href={this.url} target='_blank'>{this.props.children}</a>
            }
            </span>
        )
    }
}