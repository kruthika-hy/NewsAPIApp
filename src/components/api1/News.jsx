import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const News = ({newsContent,newsId, newsFirst,nerClick}) => {
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
                                {newsContent.author  === null ? "-" : newsContent.author}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                Description: 
                            </div>
                            <div className="col-md-8">
                                {newsContent.description === null ? "-" : newsContent.description}
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
                        <div className="row m-3 float-right">
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-xs" onClick={() => nerClick(newsContent)}>NER</button>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}