import axios from 'axios';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from "./images/loader_image.gif"
import {NewsAPIContainer} from './components/api1/NewsAPIContainer';
import {NewsNYTimesContainer} from './components/api2/NewsNYTimesContainer'
import PageCount from './components/PageCount'
import UserFeedFormcontainer from './components/userFeeds/userFeedFormcontainer'
import UserFeedItemContainer from './components/userFeeds/userFeedItemContainer'
import {UserFeedOutput} from './components/userFeeds/userFeedOutput'
import {UserFeedSpacyOutput} from './components/userFeeds/userFeedSpacyOutput'
import {NewsApiOutput} from './components/api1/NewsApiOutput'
import {NewsNYOutput} from './components/api2/NewsNYOutput'
import { uuid  } from 'uuidv4';
import HomePageComponent from "./components/HomePage";
import {
  Accordion,
} from 'react-bootstrap';
import "./styles/app.css"
import SelectAPIDropDown from './components/SelectAPIDropDown'
import {NavigationBar} from "./components/NavigationBar"
import FooterComponent from "./components/Footer"
import { NerSpacyOutput } from "./components/NerSpacyOutput";
class App extends Component {
  
  state = {
    newUserFeedItems: [],
    hompageDisplay: true, // homepage display boolean
    isNewsAPIOutput: false,
    isNYAPIOutput: false,
    isNERClickOutput: false,
    loaderDisplay: false, 
    threatNonThreatWarning: false,
    isUserFeedSpacyOutput: false,
    selectAPIs: [
     {
        name: 'News API',
        value: 'NewsAPI',
      },
      {
        name: 'NY Times',
        value: 'nyTimes',
      },
    ],
    selectedAPIValue: 'NewsAPI',
    newsAPIOutputItems: [], //News api and NYtimes api classified output container object
    nerOutputContent: [], //News api and NYtimes api spacy output container object
    userFeedSpacyItems: [], //Userfeed spacy output container object
    selectPageNos: [
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
      {
        name: '70',
        value: '70',
      },
      {
        name: '90',
        value: '90',
      },
      {
        name: '100',
        value: '100',
      },
    ],
    // The json items count is assigned to 20 only as a default value
    pageLengthValue: 20,
    pageLengthChangeBoolean: false, // boolean to keep a track of changing page number value
    //User feed addition
    userFeedContent : "",
    isUserFeedNotEmpty: false,
  }
  // Function to handle the dropdown change of APIs
  handleDropdownChangeAPI = (selectValue) => {
    // setting the state value on user's selection
    this.setState({ selectedAPIValue: selectValue });
  };

  //  Function to handle the page count dropdown change 
  handleSetPageCount = (selectValue,valAPI) => {
    this.setState({ pageLengthValue: selectValue});
    this.setState({ selectedAPIValue: valAPI });
    this.setState({ pageLengthChangeBoolean : true})
  }
  
  // Event handler function for NER button click on each of the items in the list API 1
  handleNEROutputClick = (nerOutputContent,nerClickBoolean)=> {//, nerOutputTitle, nerClickBoolean) => {
    
    // creating a variable to store the NERcontent (the clicked item) | added by Kruthika
    let reponseItemContent = nerOutputContent;
    //Loader is activated as soon as the send button is clicked
     this.setState({ loaderDisplay: true })
    const final_data = axios.post('http://localhost:5000/spacy_and_threat_classify', reponseItemContent)
    .then(response => {
    //Loader is deactivated as soon as the send button is clicked
    this.setState({ loaderDisplay: false })
    
    let spacyOutput = response.data; // Storing the state variable nerOutput from spacy along with the tags and words in a variable called spacyOutput
    let updatedContent = spacyOutput.newsContent; // spacyOutput content string
    // storing the tags details object into a variable
    let spacyOutputTagsDetails = spacyOutput.detailedData;
    spacyOutputTagsDetails.forEach((element) => {
            // Switch case for each of the tags to highlight the appropriate words in the total content
              switch (element["Label"]) {
                case "PER":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"), "<span title='Person' class='per'>"+element["Word"]+"</span>")
                  break;
                case "TMS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Technical Mobility System' class='tms'>"+element["Word"]+"</span>")
                  break;
                case "ATS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Another Technical System' class='ats'>"+element["Word"]+"</span>")
                  break; 
                case "ATK":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Attack' class='atk'>"+element["Word"]+"</span>")
                  break; 
                case "AML":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Animal' class='aml'>"+element["Word"]+"</span>")
                  break;  
                case "CONS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Consequences' class='cons'>"+element["Word"]+"</span>")
                  break;  
                case "TAR":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Target' class='tar'>"+element["Word"]+"</span>")
                  break;   
                case "HAZ":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Hazard' class='haz'>"+element["Word"]+"</span>")
                  break;   
                default:
                  console.log("Nothing")
              }
            
          });
        
          
    spacyOutput.newsContent = updatedContent; // stroring the updated newsContent string having the colored span tags to the spacy.newsContent
    // Storing the updated spacyOutput having the span tags for the threat tags(words) into a state variable
    this.setState({nerOutputContent : spacyOutput});
    // Ner output compenent is displayed by changing the boolean to true
    this.setState({ isNERClickOutput: nerClickBoolean }); 
    return final_data
    })
    .catch(error => {
    console.log(error)
    
    })
   }
  
  // Back button click in NER output
  handleNERBackButtonCLick = () => {
    this.setState({isNERClickOutput: false})
  }
  // Back button click in News feed output
  handleNewsBackButton = () => {
    this.setState({isNewsAPIOutput: false})
    this.setState({isNYAPIOutput: false})
  }

  handleCompleteNYJSONClick = (completeData) => {
    //Loader is activated as soon as the send button is clicked
   this.setState({ loaderDisplay: true })
   const final_data = axios.post('http://localhost:5000/classify_news_list_nyi', completeData)
   .then(response => {
     //Loader is deactivated as soon as the send button is clicked
     this.setState({ loaderDisplay: false })
     this.setState({newsAPIOutputItems: response.data})
     //Displaying purpose change the boolean values accordingly
     if(!response.data.isEmpty()){
      this.setState({isNewsAPIOutput: true})
      this.setState({isNYAPIOutput: false})
    }
     return final_data
   })
   .catch(error => {
     console.log("Error Message",error)
    });
    
  }

  
  // Event handling function for the save/submit button that invokes the model by sending the complete json from API
  // and getting the classified output(threat or not threat) and displays the Output list component by replacing the complete API list
  handleCompleteJSONClick = (completeData) => {
    //Loader is activated as soon as the send button is clicked
   this.setState({ loaderDisplay: true })
   const final_data = axios.post('http://localhost:5000/classify_news_list', completeData)
   .then(response => {
    
    //Loader is deactivated as soon as the send button is clicked
    this.setState({ loaderDisplay: false });
    this.setState({newsAPIOutputItems: response.data})
     this.setState({isNewsAPIOutput: true})
     this.render()
     return final_data
   })
   .catch(error => {
     console.log(error)
  });
    if(!this.state.newsAPIOutputItems.isEmpty()){
      this.setState({isNewsAPIOutput: true})
      this.setState({isNYAPIOutput: false})
    }
  }
  // function to add the new news
  handleNewFeedClick = (val,event) => {
    event.preventDefault();
    if(val !== ""){
      let newItem = {
        id: uuid (), // Random ID generator using UUID library
        content: val
      }
      this.setState(
        { newUserFeedItems: [...this.state.newUserFeedItems, newItem] }
      )
      document.getElementById("textValue").value = "";
    }
  };
  //User feed send click for classification
   //User feed send click for classification
   handleUserFeedSendClick = (userFeed) => {
    
    this.setState({userFeedContent : userFeed.content})
    //Loader is activated as soon as the send button is clicked
   this.setState({ loaderDisplay: true })
    const reponseItemContent = userFeed;

    console.log('new',reponseItemContent);
    const final_data = axios.post('http://localhost:5000/text_data_classify_and_ner_result', reponseItemContent)
    .then(response => {
     //Loader is deactivated as soon as the send button is clicked
    this.setState({ loaderDisplay: false });
     console.log('full response',response)
     // To display the userFeed classified data
     this.setState({isUserFeedNotEmpty : true})
    //  check if the user content is threat or non-threat
    let responseData = response.data;
    console.log("responseData",response.data)
    for (let [key, value] of Object.entries(responseData)) {
      if(`${key}` === 'Classify'){
        if(`${value}` === "Non Threat"){
          this.setState({threatNonThreatWarning : true})
        }
        if(`${value}` === "Threat"){
          this.setState({threatNonThreatWarning : false})

          let spacyOutput = response.data; // Storing the state variable nerOutput from spacy along with the tags and words in a variable called spacyOutput
          let updatedContent = spacyOutput.newsContent; // spacyOutput content string
          // storing the tags details object into a variable
          let spacyOutputTagsDetails = spacyOutput.detailedData;
          spacyOutputTagsDetails.forEach((element) => {
            // Switch case for each of the tags to highlight the appropriate words in the total content
              switch (element["Label"]) {
                case "PER":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"), "<span title='Person' class='per'>"+element["Word"]+"</span>")
                  break;
                case "TMS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Technical Mobility System' class='tms'>"+element["Word"]+"</span>")
                  break;
                case "ATS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Another Technical System' class='ats'>"+element["Word"]+"</span>")
                  break; 
                case "ATK":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Attack' class='atk'>"+element["Word"]+"</span>")
                  break; 
                case "AML":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Animal' class='aml'>"+element["Word"]+"</span>")
                  break;  
                case "CONS":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Consequences' class='cons'>"+element["Word"]+"</span>")
                  break;  
                case "TAR":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Target' class='tar'>"+element["Word"]+"</span>")
                  break;   
                case "HAZ":
                  updatedContent = updatedContent.replace(new RegExp("\\b"+element["Word"]+"\\b"),"<span title='Hazard' class='haz'>"+element["Word"]+"</span>")
                  break;   
                default:
                  console.log("Nothing")
              }
            
          });
        
          
        spacyOutput.newsContent = updatedContent; // update the spacyOutput object with the updated content having span tags with color classes
        this.setState({userFeedSpacyItems : spacyOutput}); // update the same into state variable
        }
        
      }
    }
    
     return final_data
   })
   .catch(error => {
     console.log(error)

   })
  
    
  };
  
  //User feed output back button click function
  handleUserFeedSpacyOutputButton = (spacyBoolean) => {
    console.log('handleUserFeedSpacyOutputButton',spacyBoolean)
    //set true to display userfeed spacy output
    this.setState({isUserFeedSpacyOutput: spacyBoolean})
  }

  //User feed output back button click function
  handleUserFeedBackButton = (hideBoolean) => {
    this.setState({isUserFeedNotEmpty: hideBoolean})
    //Set the threat warning state to false if it was set to true
    this.setState({threatNonThreatWarning : hideBoolean})     
    //Set the spacyOutput state to false if it was set to true
    this.setState({isUserFeedSpacyOutput : hideBoolean})    
  }
  //onclick function to toggle between home-page and main-page
  handleHomePageClickButton = () => {
    this.setState({hompageDisplay: false})
  }

  render() {
     
    // To check if the object is empty(Generic)
     Object.prototype.isEmpty = function () {
      for (var key in this) {
        if (this.hasOwnProperty(key)) return false;
      }
      return true;
    };
    return(
      <>
         {/* Display the loading symbol while loading the data from the back-end */}
         {this.state.loaderDisplay 
            ? 
            <>
            {console.log("this.state.loaderDisplay ",this.state.loaderDisplay )}
            <div id="loader">
              <img id="loading-image" src={loader} alt="loading..."/> 
            </div> 
            </>
            : 
            <></> }
            {/* Display either landing page or homepage condition */}
          {this.state.hompageDisplay 
          ? 
            <React.Fragment>
             <NavigationBar />
             <HomePageComponent onClickNow={this.handleHomePageClickButton}/> 
             <FooterComponent/>
            </React.Fragment>
          :
          <React.Fragment>
            <NavigationBar />
            <div className="container">
              {/* Check if either of the NYoutput, NewsAPIoutput or userFeedoutput or isUserFeedSpacyOutput booleans is true and also any of the corresponding output state object is true? | added by Kruthika */}
                  {(this.state.isNewsAPIOutput || this.state.isNYAPIOutput || this.state.isUserFeedNotEmpty || this.state.isUserFeedSpacyOutput) && (!this.state.newsAPIOutputItems.isEmpty() || this.state.userFeedSpacyItems.isEmpty() || this.state.userFeedContent !== "")
                  ?
                  <div className="row">
                    {/* The display of the NER spacy output will be done based on the isNERClickOutput boolean output  | added by Kruthika*/}
                    {this.state.isNERClickOutput 
                    ? 
                      <div className ="spacyOutputContainer">
                        <NerSpacyOutput responseData={this.state.nerOutputContent} nerBackButtonClick={this.handleNERBackButtonCLick}/>
                      </div>
                    :
                    <>
                    {/* Check if we have the User feed spacy output if true show userFeedSpacy component else check other conditions | added by Kruthika */}
                    {this.state.isUserFeedSpacyOutput 
                      ?
                       <div className ="spacyOutputContainer">
                          <UserFeedSpacyOutput responseData={this.state.userFeedSpacyItems} userFeedBackButtonClick={this.handleUserFeedBackButton}/>
                      </div>
                      :
                            
                        <>{/* Check if userFeed is sent for the classification model(onclick of the send button on User feed division) */}
                          {this.state.isUserFeedNotEmpty 
                            ? <>
                              <div className ="spacyOutputContainer">
                                <UserFeedOutput threatWarning={this.state.threatNonThreatWarning} responseData={this.state.userFeedContent} userFeedSpacyOutputClick={this.handleUserFeedSpacyOutputButton} userFeedBackButtonClick={this.handleUserFeedBackButton}   />
                              </div>
                            
                              </>
                              
                          : 
                          //  If any of the NewsAPI or NYtimes API send button is clicked for classification
                            <div className="col-md-12 mr-1 mt-1 p-3 mainBackground">
                                <div className="leftContainer_output">
                                  <Accordion defaultActiveKey="0">
                                      {this.state.isNewsAPIOutput 
                                      ?
                                      <>
                                      <h5>Classified output</h5>
                                      <NewsApiOutput responseData={this.state.newsAPIOutputItems} nerOutputClick={this.handleNEROutputClick}/>
                                      </>
                                      :
                                      <>
                                      <h5>Classified output</h5>
                                      <NewsNYOutput responseData={this.state.newsAPIOutputItems} nerOutputClick={this.handleNEROutputClick}/>
                                      </>
                                      }
                                      
                                    </Accordion>
                                </div> 
                                <button className="btn btn-primary btn-sm btn-general float-right btn_output" onClick ={this.handleNewsBackButton}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                  </svg>
                                  Back
                                  </button>
                              </div> 
                          }
                        </>
                      } 
                    </>
                    
                    }
                    
                  </div>
                  : 
                  <div className="row">
                    <div className="col-md-7 mr-1 mt-1 p-3 mainBackground">
                    <h5>API Feeds</h5>
                    <div className="row pd-btm-pt5 dropdownRow">
                      <PageCount onDropDownChange={this.handleSetPageCount} selectedValue={this.state.pageLengthValue} optionValues={this.state.selectPageNos} apiValue={this.state.selectedAPIValue}/>
                      <SelectAPIDropDown onDropDownChange={this.handleDropdownChangeAPI} selectedValue={this.state.selectedAPIValue} optionValues={this.state.selectAPIs}/>
                      </div>
                      <div className="leftContainer">
                        <Accordion defaultActiveKey="0">
                          {/* Conditional operator to get Data based on User API selection */}
                          {this.state.selectedAPIValue === "NewsAPI" 
                                ? 
                                <NewsAPIContainer fullDataClick={this.handleCompleteJSONClick} pageCount={this.state.pageLengthValue}/> 
                                : 
                                <NewsNYTimesContainer nerClickEvent={this.handleNERAPI2Click} pageCount={this.state.pageLengthValue} fullDataClick={this.handleCompleteNYJSONClick}/>}
                        </Accordion>
                      </div>
                    
                    </div>
                    <div className="col-md-4 rightContainer mt-1 p-3 mainBackground">
                      <UserFeedFormcontainer onAddNewFeed = {this.handleNewFeedClick}/>
                      <div className="rightContainerChild">
                          <UserFeedItemContainer newItems ={this.state.newUserFeedItems} onSendClick = {this.handleUserFeedSendClick}/>
                      </div>
                  </div>
                  </div>
                  }
            </div>
            <FooterComponent/>
          </React.Fragment>
          }
      </>
      )
  }
  
}
export default App;