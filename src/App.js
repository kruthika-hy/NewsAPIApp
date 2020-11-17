import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getNews} from "./services/newAPI"
import { NewsContainer } from './components/NewsContainer';
// import 
import "./styles/app.css"
export const App = () => {
  
  return(
  <div className="container">
    <h4>Top headlines of United States of America</h4>
    <div className="fullContainer">
     <NewsContainer /> 
    </div>
    <button type="submit" className="btn btn-primary btnStayRight">Submit</button>
  </div>)
}
