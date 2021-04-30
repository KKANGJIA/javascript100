import React, { Component } from 'react';
import Card from './card';
import { searchYouTube } from '../searchYouTube'; 

class Cards extends Component {
    state = {
        videos: [],
        videoTitle: [],
    };

    render() {
        return (
            <ul className="videoCard">
                <Card
    
                />
            </ul>
        );
    }
}

export default Cards;