import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const NewsNYTimesCardItems = ({newsContent,newsId, newsFirst}) => {
    return(
       <Card>
                <Accordion.Toggle as={Card.Header} eventKey={newsFirst !== null ? "0" : newsId} >
                    {newsContent.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={newsFirst !== null ? "0" : newsId}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-4">
                                Author: 
                            </div>
                            <div className="col-md-8">
                                {newsContent.byline  === null ? "-" : newsContent.byline}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                Abstract: 
                            </div>
                            <div className="col-md-8">
                                {newsContent.abstract === null ? "-" : newsContent.abstract}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                Source: 
                            </div>
                            <div className="col-md-8">
                                <a href={newsContent.url} target="_blank" rel="noreferrer">{newsContent.url}</a>
                            </div>
                        </div>
                        {/* <div className="row m-3 float-right">
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-sm btn-general" onClick={() => nerClick(newsContent)}>NER</button>
                            </div>
                         </div> */}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}