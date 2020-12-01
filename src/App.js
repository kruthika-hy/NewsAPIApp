import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {getNews} from "./services/newAPI"
import {NewsContainer} from './components/NewsContainer';
import PageCount from './components/PageCount'
import NewNewsFormContainer from './components/NewNewsFormContainer'
import NewNewsItemContainer from './components/NewNewsItemContainer'
import { uuid  } from 'uuidv4';
import {
  Accordion,
} from 'react-bootstrap';
import "./styles/app.css"
class App extends Component {
  state = {
    pageCount : 10,
    newItems: [],
  }
  handleSetPageCount = (val) => {
    // console.log("checkValue",val);
  }
  handleNewFeedClick = (val,event) => {
    event.preventDefault();
    if(val !== ""){
      let newItem = {
        id: uuid (),
        desc: val
      }
      this.setState(
        { newItems: [...this.state.newItems, newItem] }
      )
      document.getElementById("textValue").value = "";
    }
    
    // console.log("newsData",this.state.newItems,newItem)
  };
  render() {
    return(
      <div className="container">
        <div className="row m-1">
          <label htmlFor="selectPage" className="col-md-2">Page Count</label>
          <PageCount pageCount={this.state.pageCount} onClickSetPage={this.handleSetPageCount}/>
        </div>
      
        <div className="fullContainer">
        <Accordion defaultActiveKey="0">
         <NewsContainer pageCount={this.state.pageCount}/> 
        </Accordion>
        </div>
        <NewNewsFormContainer onAddNewFeed = {this.handleNewFeedClick}/>
        <NewNewsItemContainer newItems ={this.state.newItems}/>
        <button type="submit" className="btn btn-primary btnStayRight">Submit</button>
      </div>)
  }
  
}
export default App;