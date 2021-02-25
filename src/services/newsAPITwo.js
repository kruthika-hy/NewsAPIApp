// NY times API free
import axios from 'axios';
// import {selectRequiredFields} from "../utils/selectRequiredFields"
const apiKey = "uh9JpCCB4mwSMC1YT6oeYwOQXvkc8JhR";
export const baseURL = `https://api.nytimes.com/svc/news/v3/content/nyt/`;

export const newStoriesURL = `${baseURL}automobiles.json,business.json`;

// async function always returns a promise with data
// Promise call to fetch the data from NYTimes | added by Kruthika
export const getNews = async (pageLength) => {
    // destructuring the the API fetched data by using {data}
    const result = await axios.get(`${newStoriesURL}&limit=${pageLength}?api-key=${apiKey}`).then(({data}) => data && data);
    return result;
}