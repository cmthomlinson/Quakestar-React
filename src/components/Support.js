import React, { Component }  from 'react';
import { useState } from "react";
import { Form, Button, Container, Image } from 'react-bootstrap'
import { useParams, Link } from "react-router";

import { useHistory } from "react-router-dom";

import { Questiondata } from '../questions';



const Support = () => {
    const history = useHistory();
    const { floor_id, que_id, doc_id } = useParams();
    const [issue, setIssue] = useState();
    const [type, setType] = useState()

    const [isLoading, setIsLoading] = useState(false);

    

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { problem: {
            "floor_id": floor_id,
            "type": type,
            "que_id": que_id,
            "issue": issue
        }}


        const url = 'https://qyp5jmq2eg.us-east-1.awsapprunner.com/issue'
        

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
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('Error:', error);
        });

    }
    
    return(
        <div className="Question">
            <Container>
                <h1>Feedback form</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="type" required>
                        <Form.Label>Is this a problem or an improvement</Form.Label>
                        <Form.Select onChange={e => setType(e.target.value)}>
                            <option id="issue" value="issue">Problem</option>
                            <option id="improvement" value="improvement">Improvement</option>

                    </Form.Select>
                    </Form.Group>
                    <Form.Group size="lg" controlId="issue" required>
                        <Form.Label>{type}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="issue"
                            value={issue}
                            onChange={e => setIssue(e.target.value)}
                        />
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
            </Container>
            


        </div>
    )
    
}

export default Support;