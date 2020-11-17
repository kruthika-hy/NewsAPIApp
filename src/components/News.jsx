import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const News = ({newsContent,newsFirst}) => {
    return(
        <>
        <Accordion defaultActiveKey={newsFirst ? newsFirst : null}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={newsContent.publishedAt} key={newsContent.publishedAt}>
                    {newsContent.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={newsContent.publishedAt} key={newsContent.publishedAt}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-4">
                                Author: 
                            </div>
                            <div className="col-md-8">
                                {newsContent.author}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                Description: 
                            </div>
                            <div className="col-md-8">
                                {newsContent.description}
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
        </Accordion>
        </>
    )
}