import React from 'react';
import {
    Card,
    Button
  } from 'react-bootstrap';
export const NerSpacyOutput = ({responseData,nerBackButtonClick}) => {
    return(
        <>
        <Card>
            <Card.Header>Threat based extracted output</Card.Header>
            <Card.Body>
                <Card.Title>NER Output</Card.Title>
                <Card.Title class="threatTypeDiv"><h6>Threat Type:</h6> <span>{responseData.threatClassification}</span></Card.Title>
                <Card.Text>
                    {/* <p>{responseData[0].newsContent[0]}</p> */}
                    <div dangerouslySetInnerHTML={{ __html: responseData.newsContent}} />
                </Card.Text>
                <Button variant="btn btn-primary btn-sm btn-general float-right" onClick={() => nerBackButtonClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                     Back to classified news 
                </Button>
            </Card.Body>    
        </Card>
        </>
    )
}