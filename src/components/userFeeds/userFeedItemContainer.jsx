import React, { Component } from 'react';
import NewsItem from './NewsItem'
class UserFeedItemContainer extends Component {
    render() { 
        const {newItems, onSendClick} = this.props;
        return ( 
            <ul className="list-group userFeedULContainer">
                {newItems.map((newsItem) => (
                    <NewsItem
                    key={newsItem.id}
                    newsItem={newsItem}
                    onSendClick = {onSendClick}
                    >
                    </NewsItem>
                ))}
            </ul>
         );
    }
}
 
export default UserFeedItemContainer;