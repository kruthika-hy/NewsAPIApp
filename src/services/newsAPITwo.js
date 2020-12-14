// NY times API free
import axios from 'axios';
// import {selectRequiredFields} from "../utils/selectRequiredFields"
const apiKey = "sR04ptPBDMaMNqAqhRQiIkVVjIKn1nSa";
export const baseURL = `https://api.nytimes.com/svc/topstories/v2/`;
export const pageLength = 15;
export const newStoriesURL = `${baseURL}home.json?api-key=${apiKey}`;
// export const newsURL = `${baseURL}item/`;


// export const getNews = async (newsID) => {
//     const result = await axios.get(`${newsURL + newsID}.json`).then(({data}) => data && selectRequiredFields(data));
//     return result;
// }
// async function always returns a promise with data
export const getNews = async (val) => {
    // destructuring the the API fetched data by using {data}
    const result = await axios.get(newStoriesURL).then(({data}) => data && data);
    console.log('result',result.results)
    return result;
}