import React from 'react';
import {
    Card,
    Button
  } from 'react-bootstrap';
export const UserFeedOutput = ({responseData,userFeedBackButtonClick,threatWarning,userFeedSpacyOutputClick}) => {
    return(
        <>
        <Card>
            <Card.Header>Classified user feed output</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>{responseData}</p>
                    {/* Display the warning message if not threat else show NER click button to get the spacy output | added by Kruthika */}
                    {threatWarning 
                    ? 
                        <div class="alert alert-warning">
                        <strong>Not a threat!</strong> You can click <a href="#" onClick={() => userFeedBackButtonClick(false)} class="alert-link">here </a> to go back to add new user feed or click on the back button.
                        </div>
                    :
                        <Button variant="btn btn-primary btn-sm btn-general float-right" onClick={() => userFeedSpacyOutputClick(true)}>
                            Send
                        </Button>
                    }
                </Card.Text>
                <Button variant="btn btn-primary btn-sm btn-general float-right" onClick={() => userFeedBackButtonClick(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                     Back to Homepage 
                </Button>
            </Card.Body>    
        </Card>
        </>
    )
}