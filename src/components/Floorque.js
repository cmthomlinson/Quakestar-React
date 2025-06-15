import React, { Component, useState }  from 'react';
import { Container, Form, Button, Col, Row, Image } from "react-bootstrap";
import { useHistory } from 'react-router';

import { Questiondata } from '../questions';
import Info from './Info';

function submitContruct(floor_id) {
    const floor = Questiondata[floor_id]
    
    for(var i in floor)
        localStorage.setItem(i, 0)
}

const Floorque = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [floor_id, setfloor_id] = useState("1");

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        submitContruct(floor_id)
        const body = { user: {
            "name": JSON.parse(localStorage.getItem('user')).name,
            "email": JSON.parse(localStorage.getItem('user')).email,
            "address": JSON.parse(localStorage.getItem('user')).address,
            "suburb": JSON.parse(localStorage.getItem('user')).suburb,
            "city": JSON.parse(localStorage.getItem('user')).city,
            "postcode": JSON.parse(localStorage.getItem('user')).postcode,
            "floor_id": floor_id
        }}
        
        const url = 'https://qyp5jmq2eg.us-east-1.awsapprunner.com/register/' +  body['user']['floor_id']
        

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            
            setIsLoading(false);
            const next_route = "/question/" + floor_id +"/" + 1 + "/" + data
            history.push(next_route)
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('Error:', error);
        });
    }

    return (
        <div className="Home">
            <Container>
                <div className="Question">
                    <div>
                        <Row>
                            <Col xs={8} >
                            <Image src={require('../img/HouseCheck.png')}/>
                            <div class="">
                                <h1>Lets get started</h1>
                                <h4>To initalize your questionnaire, select how many floors your property has.</h4>
                                <br />
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group size="lg" controlId="Floor id" required>
                                        <Form.Label>Number of floors</Form.Label>
                                        <Form.Select onChange={e => setfloor_id(e.target.value)}>
                                            <option id="1" value="1">1 Floor</option>
                                            <option id="2" value="2">2 Floors</option>
                                            <option id="3" value="3">3 Floors</option>
                                            <option id="1b" value="1b">1 Floor and Basement</option>
                                            <option id="2b" value="2b">2 Floors and Basement</option>
                                            <option id="3b" value="3b">3 Floors and Basement</option>

                                    </Form.Select>
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="submit-button"
                                        disabled={isLoading}
                                        onClick={!isLoading ? handleSubmit : null}
                                        >
                                        {isLoading ? 'Loading…' : 'Submit'}
                                    </Button>

                                </Form>
                            </div>


                            </Col>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <div className="">
                                <Info />
                            </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Floorque;