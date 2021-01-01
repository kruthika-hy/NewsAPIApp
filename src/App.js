import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {getNews} from "./services/newAPI"
import {NewsContainer} from './components/api1/NewsContainer';
import {NewsContainerTwo} from './components/api2/NewsContainerTwo'
import PageCount from './components/PageCount'
import NewNewsFormContainer from './components/NewNewsFormContainer'
import NewNewsItemContainer from './components/NewNewsItemContainer'
import { uuid  } from 'uuidv4';
import {
  Accordion,
  Alert
} from 'react-bootstrap';
import "./styles/app.css"
import SelectAPIDropDown from './components/SelectAPIDropDown'
import {NavigationBar} from "./components/NavigationBar"
// import FooterComponent from "./components/Footer"
class App extends Component {
  state = {
    pageCount : 10,
    newItems: [],
    selectAPIs: [
      // {
      //   name: 'Select…',
      //   value: null,
      // },
      {
        name: 'News API',
        value: 'NewsAPI',
      },
      {
        name: 'NY Times',
        value: 'nyTimes',
      },
    ],
    selectedValue: 'NewsAPI',
    selectPageNos: [
      // {
      //   name: 'Select…',
      //   value: null,
      // },
      {
        name: '5',
        value: '5',
      },
      {
        name: '10',
        value: '10',
      },
      {
        name: '20',
        value: '20',
      },
      {
        name: '50',
        value: '50',
      },
    ],
    pageLengthValue: '5',
  }
  handleDropdownChangeAPI = (selectValue) => {
    console.log("Event",selectValue);
    this.setState({ selectedValue: selectValue });
  };
  handleSetPageCount = (selectValue) => {
    console.log("Page",selectValue);
    this.setState({ pageLengthValue: selectValue});
    // console.log("this.state.selectAPIs",this.state.selectedValue)
    this.setState({ selectedValue: this.state.selectedValue });
  }
  handleNERClick = (json) => {
    console.log("Hello Sagar !",json)
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
      <>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-md-7 mr-1 mt-1 p-3 mainBackground">
            <h5>API Feeds</h5>
            <Alert variant="secondary" className="mt-1 mr-0 ml-0 row basic-panel">
              {/* <label htmlFor="selectPage" className="col-md-3 m-1">Page Count</label> : */}
              <SelectAPIDropDown onDropDownChange={this.handleDropdownChangeAPI} selectedValue={this.state.selectedValue} optionValues={this.state.selectAPIs}/>
              <PageCount onDropDownChange={this.handleSetPageCount} selectedValue={this.state.pageLengthValue} optionValues={this.state.selectPageNos}/>
              </Alert>
              <div className="leftContainer">
                <Accordion defaultActiveKey="0">
                  {this.state.selectedValue === "NewsAPI" ? <NewsContainer nerClickEvent={this.handleNERClick} pageCount={this.state.pageLengthValue}/> : <NewsContainerTwo pageCount={this.state.pageLengthValue}/>}
                
                {/* <NewsContainerTwo/> */}
                </Accordion>
              </div>
            </div>
            <div className="col-md-4 rightContainer mt-1 p-3 mainBackground">
              <NewNewsFormContainer onAddNewFeed = {this.handleNewFeedClick}/>
              <div className="rightContainerChild">
                  <NewNewsItemContainer newItems ={this.state.newItems}/>
              </div>
            </div>
            {/* <button type="submit" className="btn btn-primary btnStayRight">Submit</button> */}
          </div>
          
          {/* <FooterComponent/> */}
        </div>
      </>
      )
  }
  
}
export default App;