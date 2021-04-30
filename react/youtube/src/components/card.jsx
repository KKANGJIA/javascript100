import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <li>
                <div className="video">{this.props.video}</div>
                <span className="video__title">{this.props.title}</span>
            </li>
        );
    }
}

export default Card;