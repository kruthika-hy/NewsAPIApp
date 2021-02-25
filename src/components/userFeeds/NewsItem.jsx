import React, { Component } from 'react';

class NewsItem extends Component {
    render() { 
        const {id,content} = this.props.newsItem
        const {onSendClick} = this.props;
        return ( 
             <li className="list-group-item" id={id}>
                 {content}
                 <button className="btn btn-primary btn-sm btn-general-box float-right" onClick={() => onSendClick({content})}>Send</button>
             </li>
         );
    }
}
 
export default NewsItem;
