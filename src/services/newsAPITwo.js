// NY times API free
import axios from 'axios';
// import {selectRequiredFields} from "../utils/selectRequiredFields"
const apiKey = "uh9JpCCB4mwSMC1YT6oeYwOQXvkc8JhR";
export const baseURL = `https://api.nytimes.com/svc/news/v3/content/nyt/`;
// export const pageLength = 15;
export const newStoriesURL = `${baseURL}automobiles.json,business.json`;
// export const newsURL = `${baseURL}item/`;


// export const getNews = async (newsID) => {
//     const result = await axios.get(`${newsURL + newsID}.json`).then(({data}) => data && selectRequiredFields(data));
//     return result;
// }
// async function always returns a promise with data
export const getNews = async (pageLength) => {
    // destructuring the the API fetched data by using {data}
    const result = await axios.get(`${newStoriesURL}&limit=${pageLength}?api-key=${apiKey}`).then(({data}) => data && data);
    console.log('result',result.results,pageLength)
    return result;
}