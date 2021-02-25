import React, { Component } from 'react';

class UserFeedFormcontainer extends Component {
    render() { 
        const {onAddNewFeed} = this.props
        return ( 
             <>
                <form className="AddNew_section">
                     <h5>User Feeds</h5>
                     <div className="input-group">
                        <textarea className="form-control" placeholder="Type your news here.." id="textValue" rows="5"></textarea>
                    </div>
                    <button className="btn btn-primary btn-sm btn-general float-right" type="submit" onClick={(e) => onAddNewFeed(document.getElementById("textValue").value,e)}>Add</button>
                </form>
             </>
         );
    }
}
 
export default UserFeedFormcontainer;