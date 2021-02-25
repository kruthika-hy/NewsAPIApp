import React, {useEffect, useState} from 'react';
import {getNews} from "../../services/newsAPITwo"
import {NewsNYTimesCardItems} from "./NewsNYTimesCardItems"
export const NewsNYTimesContainer = (props) => {
  const pageCount= props.pageCount;
  const fullDataClick = props.fullDataClick;
  //to store the ids so that when there is any connectivity issues UI should still be working  added by Kruthika
  const [newsContentAPI2, setNewsContentAPI2] = useState([]);
  // initialization
    useEffect (() => {
      getNews(pageCount).then(newsItems => newsItems && setNewsContentAPI2(newsItems.results));
    }, []);
//   return(newsIds.map(newsID => <NewsContainer newsID = {newsID} key={newsID}/>))
     console.log("newsContent",newsContentAPI2)
     return(
      [newsContentAPI2.map((newsData,i) => <NewsNYTimesCardItems newsContent={newsData} key={i} newsId={i} newsFirst={i === 0 ? "0" : null}/>),<button className="btn btn-primary btn-sm floatSubmit btn-general" onClick={() => fullDataClick(newsContentAPI2)}>Send</button>]
   )
     
    
}
