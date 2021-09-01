import { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

// Validation

const Register = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");

    const [floor_id, setfloor_id] = useState("1");

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
            "postcode": postcode,
            "floor_id": floor_id
        }}

        const url = 'https://quakestar.herokuapp.com/register/' +  body['user']['floor_id']

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            const next_route = "/question/" + floor_id +"/" + 1 + "/" + data
            setIsLoading(false);
            history.push(next_route)
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('Error:', error);
        });


    }
    
    return(
        <div className="Question">
            <Container>
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
                        <Form.Label>Email</Form.Label>
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
                    <Form.Group size="lg" controlId="Floor id" required>
                        <Form.Label>Floors</Form.Label>
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
            </Container>
            


        </div>
    )
    
}

export default Register;