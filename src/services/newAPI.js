import axios from 'axios';
// import {selectRequiredFields} from "../utils/selectRequiredFields"
const apiKey = "28121d5045cf4256a730f6ac14df004c";
export const baseURL = `http://newsapi.org/v2/`;
export const newStoriesURL = `${baseURL}top-headlines?country=de&pageSize=100&category=business&apiKey=${apiKey}`;
// export const newsURL = `${baseURL}item/`;


// export const getNews = async (newsID) => {
//     const result = await axios.get(`${newsURL + newsID}.json`).then(({data}) => data && selectRequiredFields(data));
//     return result;
// }
// async function always returns a promise with data
export const getNews = async () => {
    // destructuring the the API fetched data by using {data}
    const result = await axios.get(newStoriesURL).then(({data}) => data && data);
    return result;
}