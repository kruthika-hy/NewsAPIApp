import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const NewsTwo = ({newsContent,newsId, newsFirst}) => {
    // console.log('newsId',newsId)
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
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}