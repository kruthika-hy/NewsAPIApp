import React, {useEffect, useState} from 'react';
import {getNews} from "../services/newAPI"
import {News} from "../components/News"
import {pageLength} from "../services/newAPI"
export const NewsContainer = () => {
  //to store the ids so that when there is any connectivity issues UI should still be working
  // storyIds going to be initialized with an empty array and we call setStoryIds if we need any changes
    const [newsCont, setNewsCont] = useState([]);
  // initialization
    useEffect (() => {
      // setStoryIds('Hello News')
      //Setting the initialized empty array with 500(APi) stories
      // [] = hooks - when the component mounts. do this..| empty array runs only once, but if there is something in there it's gonna watch
      getNews(pageLength).then(newsItems => newsItems && setNewsCont(newsItems.articles));
    }, []);
//   return(newsIds.map(newsID => <NewsContainer newsID = {newsID} key={newsID}/>))
    //  console.log("newsContent",newsCont)
     return(
        newsCont.map((newsData,i) => <News newsContent={newsData} key={i} newsId={i} newsFirst={i === 0 ? "0" : null}/>)
        // newsCont && newsCont.url ?
        // (
        // <>
        // <p>{newsCont.title}</p>
        // <a href={newsCont.url} target="_blank">{newsCont.title}</a><br/>
        // By: <p>{newsCont.by}</p> 
        // </>
       // JSON.stringify(news)
        // )
        // : (<p>No response from API</p>)
     )
}
