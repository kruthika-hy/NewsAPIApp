import React from 'react';
import {
    Accordion,
    Card,
  } from 'react-bootstrap';

export const NewsApiOutput = () => {
    return(
       <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" >
                {/* {newsContent.title} */} Title 1
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            Author: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.author  === null ? "-" : newsContent.author} */}
                            Nikki Haley
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Description: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.description === null ? "-" : newsContent.description} */}
                            This is just a dummy description
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Source: 
                        </div>
                        <div className="col-md-8">
                            <a href=/*{newsContent.url}*/"#" target="_blank" rel="noreferrer">
                                {/* {newsContent.url} */} https://www.google.com
                                </a>
                        </div>
                    </div>
                    <div className="row m-3 float-right">
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-sm" >NER</button>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="2" >
                {/* {newsContent.title} */} Title 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            Author: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.author  === null ? "-" : newsContent.author} */}
                            Nikki Haley
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Description: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.description === null ? "-" : newsContent.description} */}
                            This is just a dummy description
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Source: 
                        </div>
                        <div className="col-md-8">
                            <a href=/*{newsContent.url}*/"#" target="_blank" rel="noreferrer">
                                {/* {newsContent.url} */} https://www.google.com
                                </a>
                        </div>
                    </div>
                    <div className="row m-3 float-right">
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-sm" >NER</button>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="3" >
                {/* {newsContent.title} */} Title 3
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            Author: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.author  === null ? "-" : newsContent.author} */}
                            Nikki Haley
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Description: 
                        </div>
                        <div className="col-md-8">
                            {/* {newsContent.description === null ? "-" : newsContent.description} */}
                            This is just a dummy description
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            Source: 
                        </div>
                        <div className="col-md-8">
                            <a href=/*{newsContent.url}*/"#" target="_blank" rel="noreferrer">
                                {/* {newsContent.url} */} https://www.google.com
                                </a>
                        </div>
                    </div>
                    <div className="row m-3 float-right">
                        <div className="col-md-4">
                            <button className="btn btn-primary btn-sm" >NER</button>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            </Card>

            
    )
}