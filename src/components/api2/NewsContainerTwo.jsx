import React, {useEffect, useState} from 'react';
import {getNews} from "../../services/newsAPITwo"
import {NewsTwo} from "./NewsTwo"
// import {pageLength} from "../services/newAPI_2"
export const NewsContainerTwo = (props) => {
  const pageCount= props.pageCount
  //to store the ids so that when there is any connectivity issues UI should still be working
  // storyIds going to be initialized with an empty array and we call setStoryIds if we need any changes
    const [newsContentAPI2, setNewsContentAPI2] = useState([]);
  // initialization
    useEffect (() => {
      // setStoryIds('Hello News')
      //Setting the initialized empty array with 500(APi) stories
      // [] = hooks - when the component mounts. do this..| empty array runs only once, but if there is something in there it's gonna watch
      getNews(pageCount).then(newsItems => newsItems && setNewsContentAPI2(newsItems.results));
    }, []);
//   return(newsIds.map(newsID => <NewsContainer newsID = {newsID} key={newsID}/>))
     console.log("newsContent",newsContentAPI2)
     return(
      newsContentAPI2.map((newsData,i) => <NewsTwo newsContent={newsData} key={i} newsId={i} newsFirst={i === 0 ? "0" : null}/>)
     )
    
}
