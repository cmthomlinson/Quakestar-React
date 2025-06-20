import React, { Component }  from 'react';
import { useParams, Link } from "react-router";
import { Questiondata } from "../questions";
import { Container, Row, Col, Button, ListGroup, Image, Badge } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import Optionform from "./Optionform";
import Textform from "./Textform";
import Picture from "./Picture";
import Results from "./Results";
import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";
import Resalert from './Resalert';
import Info from './Info';
import Checkform from './Checkform';
import Support from './Support';


const Question = () => {

    const { floor_id, que_id, doc_id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [emailisLoading, emailsetIsLoading] = useState(false);
    const [response, setResponse] = useState(localStorage.getItem(que_id));
    const [colour, setColour] = useState('primary');
    const [show, setShow] = useState(false);
    const [showSupport, setShowsupport] = useState(false);
    const [alert, setAlert] = useState(false);
    const [items, setItems] = useState([]);
    const history = useHistory();


    function getscoreanddamage(floor_id, doc_id) {
        
        const url = "https://qyp5jmq2eg.us-east-1.awsapprunner.com/sd/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result)
                setIsLoading(false)
                console.log(result)
            },
            (error) => {
                setItems({
                    "score": "error",
                    "damage": "error",
                    "ireg": "error"
                })
                setIsLoading(false)
    
            }
        )
    }

    function send_email() {

        const results_url = "https://qyp5jmq2eg.us-east-1.awsapprunner.com/question/" + floor_id + "/" + Object.keys(Questiondata[floor_id]).length + "/" + doc_id

        const body = {
            "user": JSON.parse(localStorage.getItem('user')),
            results_url: results_url

        };

        emailsetIsLoading(true)
        const url = "https://qyp5jmq2eg.us-east-1.awsapprunner.com/send_email"

        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            setAlert(true)
            setSubmitted(true)
            emailsetIsLoading(false)
            console.log('Success:', data)
            
        })
        .catch((error) => {
            emailsetIsLoading(false)
            console.error('Error:', error);
        });
        
        
    }

    useEffect(() => {
        getscoreanddamage(floor_id, doc_id)
    }, [response]);

    
    
    const nextQue = e => {
        setIsLoading(true)

        setIsLoading(false)
        const next_que = parseInt(que_id) + 1
        const next_route = "/question/" + floor_id + "/" + next_que + "/" + doc_id
        history.push(next_route)
        
    };

    const prevQue = e => {
        setIsLoading(false)
       
        const prev_que = parseInt(que_id) - 1
        const prev_route = "/question/" + floor_id + "/" + prev_que + "/" + doc_id
        history.push(prev_route)

    };

    const question = Questiondata[floor_id][que_id]

    if ((question.current_route === "option_question" || question.current_route === "clad_question") && que_id === "1") {
        return (
            <Container>
                <div className="Question">
                    <div>
                        <Row>
                            <Resalert alert={alert} setAlert={setAlert}/>
                            <Col xs={8}>
                                <Image src={require('../img/HouseCheck.png')}/>
                                <div className="form">
                                    <h2>Strength: { items.score }</h2>
                                    <ImgStrength score={ items.score }/>
                                    <h2>Damage: { items.damage }</h2>
                                    <ImgDamage damage={ items.damage }/>
                                    <br />
                                    <br />
                                    <h2>{que_id}: {question.question}</h2>
                                    <h5>{question.description}</h5>
                                    <Optionform que_id={que_id} set_res={setResponse} set_colour={setColour} setShow={setShow} setAlert={setAlert} items={items}/>
                                </div>
                                <p className="email">Save this file and email me a link.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button>
                                    
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Container>



        )
        

    }
    if (question.current_route === "option_question" && parseInt(que_id) === Object.keys(Questiondata[floor_id]).length-1) {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Resalert alert={alert} setAlert={setAlert}/>
                            <Col xs={8}>
                                <Image src={require('../img/HouseCheck.png')}/> 
                                <div className="form">
                                    <h2>Strength: { items.score }</h2>
                                    <ImgStrength score={ items.score }/>
                                    <h2>Damage: { items.damage }</h2>
                                    <ImgDamage damage={ items.damage }/>
                                    <br />
                                    <br />
                                    <h2>{que_id}: {question.question}</h2>
                                    <h5>{question.description}</h5>
                                    <Optionform que_id={que_id} set_res={setResponse} set_colour={setColour} setShow={setShow} setAlert={setAlert} items={items}/>
                                    
                                </div>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Results</Button>
                                    
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                    <p className="">Save this file and email me a link.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                      
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>


        )
    }
    if (question.current_route === "option_question") {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Resalert alert={alert} setAlert={setAlert}/>
                            <Col xs={8}>
                                <Image src={require('../img/HouseCheck.png')}/>
                                <div className="form">
                                    <h2>Strength: { items.score }</h2>
                                    <ImgStrength score={ items.score }/>
                                    <h2>Damage: { items.damage }</h2>
                                    <ImgDamage damage={ items.damage }/>
                                    <br />
                                    <br />
                                    <h2>{que_id}: {question.question}</h2>
                                    <h5>{question.description}</h5>
                                    <Optionform que_id={que_id} set_res={setResponse} set_colour={setColour} setShow={setShow} setAlert={setAlert} items={items}/>
                                    
                                </div>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button>
                                    
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                    <p className="">Save this file and email me a link.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                      
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
                                />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>


        )

    }
    
    if (question.current_route === "check_question") {
        return (
            <div className="Question">
                <Container>
                    <div>
                        <Row>
                            <Col xs={8}>
                                <Image src={require('../img/HouseCheck.png')}/>
                                <div className="form">
                                    <h2>Strength: { items.score }</h2>
                                    <ImgStrength score={ items.score }/>
                                    <h2>Damage: { items.damage }</h2>
                                    <ImgDamage damage={ items.damage }/>
                                    <br />
                                    <br />
                                    <h2>{que_id}: {question.question}</h2>
                                    <h5>{question.description}</h5>
                                    <Checkform que_id={que_id} set_res={setResponse} setShow={setShow} floor_id={floor_id} items={items}/>
                                </div>
                                
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button> 
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                    <p className="">Save this file and email me a link.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
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
                                <Image src={require('../img/HouseCheck.png')}/>
                                <div className="form">
                                    <h2>Strength: { items.score }</h2>
                                    <ImgStrength score={ items.score }/>
                                    <h2>Damage: { items.damage }</h2>
                                    <ImgDamage damage={ items.damage }/>
                                    <br />
                                    <br />
                                    <h2>{que_id}: {question.question}</h2>
                                    <h5>{question.description}</h5>
                                    <p>Look below for guidance on measuring area</p>
                                    <Textform que_id={que_id}  set_res={setResponse} setShow={setShow} floor_id={floor_id} items={items}/>
                                </div>
                                <div className="next-button">
                                    <Button onClick={nextQue} disabled={isLoading}>Next Question</Button> 
                                </div>
                                <div className="prev-button">
                                    <Button onClick={prevQue} disabled={isLoading}>Previous Question</Button>
                                    <p className="">Save this file and email me a link.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                </div>
                                <Picture floor_id={floor_id} que_id={que_id}/>
                            
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
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
                            <Col xs={8}>
                                <Resalert alert={alert} setAlert={setAlert}/>
                                <Image src={require('../img/HouseCheck.png')}/>
                                <h2>Your HouseCheck Results</h2>
                                
                                <p className="">Either save your Housecheck ID or be emailed a link to view and/or edit your saved responses.<Button variant="link"  disabled={emailisLoading} onClick={!emailisLoading ? send_email : null} role="button">{emailisLoading ? 'Loading…' : submitted ? 'Email sent': 'Email me'}</Button></p>
                                <Results floor_id={floor_id} que_id={que_id} doc_id={doc_id} strength={items.score} damage={items.damage}/>
                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                                <br/>
                                <h2 className="">Navigation</h2>
                                
                                <Menu
                                floor_id={floor_id} 
                                que_id={que_id} 
                                doc_id={doc_id}
                                colour={colour}
                                set_show={setShow}
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

const Menu = ({floor_id, que_id, doc_id, colour, setShow}) => {

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

                if (localStorage.getItem(item+1) != 0 && parseInt(que_id) === que_url)  {
                    return (
                        <ListGroup.Item variant="success" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}><b>{item+1}:  {index}</b></ListGroup.Item>       
                    )
                    
                }
                if (parseInt(que_id) === Object.keys(Questiondata[floor_id]).length && parseInt(item+1) === Object.keys(Questiondata[floor_id]).length) {
                    return (
                        <ListGroup.Item variant="info" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}><b>Results</b></ListGroup.Item>       
                    )
                    
                }
                if (parseInt(que_id) === que_url && que_id !== Object.keys(Questiondata[floor_id]).length) {
                    
                    return (
                        <ListGroup.Item variant="primary" action onClick={() => history.push("/question/" + floor_id + "/" + que_url + "/" + doc_id)}><b>{item+1}:  {index}</b></ListGroup.Item>       
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