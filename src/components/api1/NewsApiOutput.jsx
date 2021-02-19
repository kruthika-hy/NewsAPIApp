import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const NewsApiOutput = ({responseData,nerOutputClick}) => {
    return(
        // Mapping through the response object to render the items
        responseData.map((outputItem,i) => 
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={i === 0 ? "0" : i} >
                {outputItem.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i === 0 ? "0" : i}>
                <Card.Body>
                    {/* 
                        Kirtika : You can use the commented section for description and 
                        remove the content div if not necessary
                    */}
                    {/* Description starts here */}
                    {/* <div className="row">
                            <div className="col-md-4">
                                Description: 
                            </div>
                            <div className="col-md-8">
                                {outputItem.description === null ? "-" : outputItem.description}
                            </div>
                    </div> */}
                    {/* Description ends here */}

                    {/* Content section starts here */}
                    {/* <div className="row">
                        <div className="col-md-4">
                            Content: 
                        </div>
                        <div className="col-md-8" key={i}>
                            {outputItem.content === null ? "-" : outputItem.content}
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-4">
                            Source: 
                        </div>
                        <div className="col-md-8" key={i}>
                            <a href={outputItem.url} target="_blank" rel="noreferrer">{outputItem.url}</a>
                        </div>
                    </div>
                    <div className="row m-3 float-right">
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-sm" onClick={() => nerOutputClick(outputItem)}>NER</button>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        )
    )
}