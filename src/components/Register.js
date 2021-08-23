import { useState} from "react";
import { Form, Button, Container } from 'react-bootstrap'

import { useHistory } from "react-router-dom";

// Validation

const Register = () => {
    const history = useHistory();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [floor_id, setfloor_id] = useState("1");

    



    const handleSubmit = e => {
        e.preventDefault();
        const body = { user: {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "address": address,
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
        const next_route = "/question/" + floor_id +"/1/" + data
        history.push(next_route)
        })
        .catch((error) => {
        console.error('Error:', error);
        });


    }
    
    return(
        <div className="Question">
            <Container>
                <h1>Start Questionnaire</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="firstName"
                            value={firstName}
                            onChange={e => setfirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="lastName"
                            value={lastName}
                            onChange={e => setlastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setemail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            autoFocus
                            type="address"
                            value={address}
                            onChange={e => setaddress(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Floor id">
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
            


        </div>
    )
    
}

export default Register;