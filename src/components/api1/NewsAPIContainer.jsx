import React, {useEffect, useState} from 'react';
import {getNews} from "../../services/newAPI"
import {NewsAPICardItems} from "./NewsAPICardItems"

export const NewsAPIContainer = (props) => {
  const pageCount= props.pageCount;
  const fullDataClick = props.fullDataClick;
  //to store the ids so that when there is any connectivity issues UI should still be working added by Kruthika
  let [newsCont, setNewsCont] = useState([]);
  // initialization
    useEffect (() => {
      getNews(pageCount).then(newsItems => newsItems && setNewsCont(newsItems.articles));
    }, [pageCount]);

     return(
        [newsCont.map((newsData,i) => <NewsAPICardItems newsContent={newsData} key={i} newsId={i} newsFirst={i === 0 ? "0" : null}/>),<button className="btn btn-primary btn-sm floatSubmit btn-general" onClick={() => fullDataClick(newsCont)}>Send</button>]
     )
}
