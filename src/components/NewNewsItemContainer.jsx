import React, { Component } from 'react';
import NewsItem from './NewsItem'
class NewNewsItemContainer extends Component {
    render() { 
        const {newItems} = this.props;
        return ( 
            <ul className="list-group">
                {/* <li class="list-group-item">First item</li>
                <li class="list-group-item">Second item</li>
                <li class="list-group-item">Third item</li> */}
                {newItems.map((newsItem) => (
                    <NewsItem
                    key={newsItem.id}
                    newsItem={newsItem}
                    >
                    </NewsItem>
                ))}
            </ul>
         );
    }
}
 
export default NewNewsItemContainer;