import React, { Component } from 'react';

class NewsItem extends Component {
    render() { 
        const {id,desc} = this.props.newsItem
        return ( 
             <li className="list-group-item" id={id}>{desc}</li>
         );
    }
}
 
export default NewsItem;
