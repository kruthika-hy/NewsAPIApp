import React, { Component } from 'react';
class HomePageComponent extends Component {
    render() { 
        const {onClickNow} = this.props; 
        return ( 
        <div className="homePageParentDiv">
            <div className="homePage_div"></div>
            <div className="card">
                <div className="card-body">
                    <div className="animated-title">
                        <div className="text-top">
                            <div>
                            <span>Welcome</span>
                            <span>to Threat Extractor</span>
                            </div>
                        </div>
                        <div className="text-bottom">
                            <div>
                                <a href="#" onClick={() => onClickNow()}>Click here to get started!</a></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
          );
    }
}
 
export default HomePageComponent;