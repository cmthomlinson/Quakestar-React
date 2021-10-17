import React, { Component, useState, useEffect }  from 'react';
import { useParams } from 'react-router';
import { Accordion, Button, Form } from 'react-bootstrap';



const Info = () => {
    const { floor_id, que_id, doc_id } = useParams();
    const [issue, setIssue] = useState("");
    const [type, setType] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        setSubmitted(false)
        setIssue(" ")
    }, [que_id]);

    useEffect(() => {
        setIssue(" ")
    }, [submitted]);

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitted(true)
        const body = { issue: {
            "floor_id": floor_id,
            "type": type,
            "que_id": que_id,
            "issue": issue
        }}


        const url = 'https://quakestar.herokuapp.com/issue'
        

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
    return (
        <div>
            <div >
                <Accordion defaultActiveKey="0" flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <div class="">
                            <h3>HouseCheck</h3> 
                            <h5 class="text-muted">by QuakeStar</h5> 
                        </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
                            Welcome to the <b>Earthquake safety self-assessment tool
                            (HouseCheck)</b> for NZ single residences. Ratings are 1 to 5
                            stars, as used by the US Resiliency Council system.
                            Scores are for Strength of a house and likely Damage.
                        </p>
                        <p>
                            QuakeStar HouseCheck is designed to give an indication of the 
                            strength of your house in earthquake and an indication of likely 
                            damage - compared to houses built to the minimum code standard for 
                            your area. 
                        </p>
                        <p>
                            In order for strength and damage scores to be calculated, the questionnaire has pre-inserted answers.
                            Sometimes your strength and/or damage score may not change, this is because your submitted answer
                            is the same as the pre-inserted answer for that question.
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="type" required>
                                <Form.Label><h6>If you have any problems or would like suggest an improvement please let us know</h6></Form.Label>
                                <br />
                                <Form.Select onChange={e => setType(e.target.value)}>
                                    <option id="issue" value="issue">Problem</option>
                                    <option id="improvement" value="improvement">Improvement</option>

                            </Form.Select>
                            </Form.Group>
                            <Form.Group size="lg" controlId="issue" required>
                                <Form.Label>{' '}</Form.Label>
                                <Form.Control
                                    as="textarea" 
                                    rows={4}
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
                                {isLoading ? 'Loading…' : submitted ? 'Submitted': 'Submit'}
                            </Button>

                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div>
                <small class="version text-muted">HouseCheck version 2.0</small>
            </div>
            
        </div>

        
    );
}

export default Info;