import React, { Component }  from 'react';
import { useState } from "react";
import { Form, Button, Container, Image } from 'react-bootstrap'


import { useHistory } from "react-router-dom";

import { Questiondata } from '../questions';
// Validation


const Register = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { user: {
            "name": name,
            "email": email,
            "address": address,
            "suburb": suburb,
            "city": city,
            "postcode": postcode
        }}

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(body['user']))

        const next_route = "/floorque/"
        setIsLoading(false);
        history.push(next_route)



    }
    
    return(
        <div className="Question">
            <Container>
                <div class="text-center">
                    <Image src={require('../img/HouseCheck.png')}/>
                </div>
                <h1>Start Questionnaire</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="firstName" required>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="firstName"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="email" required>
                        <Form.Label>Email - Required for saving responses</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setemail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Address" required>
                        <Form.Label>Address line</Form.Label>
                        <Form.Control
                            autoFocus
                            type="address"
                            value={address}
                            onChange={e => setaddress(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Suburb" required>
                        <Form.Label>Suburb</Form.Label>
                        <Form.Control
                            autoFocus
                            type="suburb"
                            value={suburb}
                            onChange={e => setSuburb(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="City" required>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            autoFocus
                            type="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Postcode" required>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control
                            autoFocus
                            type="City"
                            value={postcode}
                            onChange={e => setPostcode(e.target.value)}
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

export default Register;