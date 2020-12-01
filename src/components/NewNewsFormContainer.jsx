import React, { Component } from 'react';

class NewNewsFormContainer extends Component {
    render() { 
        const {onAddNewFeed} = this.props
        return ( 
             <>
                <form className="AddNew_section">
                     <h5>User Feeds</h5>
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Write here..." id="textValue"/>
                         <div className="input-group-btn">
                            <button className="btn btn-success" type="submit" onClick={(e) => onAddNewFeed(document.getElementById("textValue").value,e)}>Add New</button>
                          </div>
                    </div>
                </form>
             </>
         );
    }
}
 
export default NewNewsFormContainer;