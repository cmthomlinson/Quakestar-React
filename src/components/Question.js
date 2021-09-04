import React, { Component }  from 'react';
import { useParams, Link } from "react-router";
import { Questiondata } from "../questions";
import { Container, Row, Col, Button, ListGroup, Image, Alert } from 'react-bootstrap'
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Optionform from "./Optionform";
import Textform from "./Textform";
import Picture from "./Picture";
import Results from "./Results";

const Question = () => {

    const { floor_id, que_id, doc_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);


    const history = useHistory();
    
    const nextQue = e => {
        setIsLoading(true)
        getdoc(floor_id, doc_id)
        
        setIsLoading(false)
        const next_que = parseInt(que_id) + 1
        const next_route = "/question/" + floor_id + "/" + next_que + "/" + doc_id
        history.push(next_route)
        
    };

    const prevQue = e => {
        setIsLoading(false)
        getdoc(floor_id, doc_id)
        const prev_que = parseInt(que_id) - 1
        const prev_route = "/question/" + floor_id + "/" + prev_que + "/" + doc_id
        history.push(prev_route)

    };



    

    function getdoc(floor_id, doc_id) {
        
        const url = "https://quakestar.herokuapp.com/doc/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
    
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(false);
    
            }
        )
    }

    function get_all_submitted(submited, floor_id, que_id, doc_id) {
        const que_url = que_id + 1
        for (const i in submited) {
            if (submited[i] === 0) {
                return <Alert>You have not completed a question</Alert>
            }
        }
        history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)

    }


    const question = Questiondata[floor_id][que_id]

    if ((question.current_route === "option_question" || question.current_route === "clad_question") && que_id === "1") {
        return (
            <Container>
                <div className="Question">
                    <div>
                        <Row>
                            <Col xs={8}>
                                <Image src={require('../img/Quakestar_280px.png')}/>
                             
                                <Optionform que_id={que_id}/>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>

                            <div className="">
                                <h1 className="">Menu</h1>
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Container>



        )
        

    }
    if (question.current_route === "option_question" || question.current_route === "clad_question") {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Col xs={8}>
                                <Image src={require('../img/Quakestar_280px.png')}/>
                                <Optionform que_id={que_id}/>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button>
                                    
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <h2>Navigation</h2>
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>


        )

    }
    if (question.current_route === "text_question" && parseInt(que_id) === Object.keys(Questiondata[floor_id]).length-1) {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Col xs={8}>
                                <Image src={require('../img/Quakestar_280px.png')}/>
                                <Textform que_id={que_id}/>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Results</Button> 
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            
                            <div className="">
                                <h2>Navigation</h2>
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

        )
    }
    if (question.current_route === "text_question") {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Col xs={8}>
                                <Image src={require('../img/Quakestar_280px.png')}/>
                                <Textform que_id={que_id}/>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button> 
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            
                            <div className="">
                                <h2>Navigation</h2>
                                <Menu 
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

        )
    }
    if (question.current_route === "results") {
        return (
            <div className="Results">
                <Container>
                    <div>
                        <Row>
                            
                            <h2>Results</h2>
                            <Col xs={8} className="form">
                                <Image src={require('../img/Quakestar_280px.png')}/>
                                <p>Congratulations you have finished the questionnaire</p>
                                <Results floor_id={floor_id} que_id={que_id} doc_id={doc_id}/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <h2>Navigation</h2>
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

        )
    }
    
        
    
}

const Menu = ({floor_id, que_id, doc_id}) => {

    const floor = Questiondata[floor_id]
    
    const history = useHistory();

    var res = [];
    for(var i in floor) {
        res.push(floor[i]['subject']);
        
    }
    

    return(
        <ListGroup>
            {res.map((index, item)=>{
                const que_url = item+1
                
                if (parseInt(que_id) === que_url && que_id != Object.keys(Questiondata[floor_id]).length) {
                    
                    return (
                        <ListGroup.Item variant="primary" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}>{item+1}:  {index}</ListGroup.Item>       
                    )
                }
                if (parseInt(item+1) === Object.keys(Questiondata[floor_id]).length) {
                    return (
                        <ListGroup.Item variant="info" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}>Results</ListGroup.Item>       
                    )
                    
                }
                if (localStorage.getItem(item+1) === undefined ) {
                    return (
                        <ListGroup.Item variant="danger" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}>{item+1}:  {index}</ListGroup.Item>       
                    )
                    
                }
                if (localStorage.getItem(item+1) != 0) {
                    return (
                        <ListGroup.Item variant="success" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}>{item+1}:  {index}</ListGroup.Item>       
                    )
                    
                }
                else {
                    return (
                        <ListGroup.Item variant="outline-primary" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}>{item+1}:  {index}</ListGroup.Item>            
                    )
                }


                

            })}
        </ListGroup>
    )


    
    
}


export default Question;