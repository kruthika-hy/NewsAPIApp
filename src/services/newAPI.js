import axios from 'axios';
const apiKey = "28121d5045cf4256a730f6ac14df004c";
export const baseURL = `http://newsapi.org/v2/`;

export const newStoriesURL = `${baseURL}everything?q=automobiles&apiKey=${apiKey}`;
// async function always returns a promise with data
// Promise call to fetch the data from newsAPI | added by Kruthika
export const getNews = async (pageLength) => {
    // destructuring the the API fetched data by using {data}
    const result = await axios.get(`${newStoriesURL}&pageSize=${pageLength}`).then(({data}) => data && data);
    return result;
}