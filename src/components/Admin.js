import React, { Component, useState }  from 'react';
import { Container, Form, Button,  } from "react-bootstrap";

const Admin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
    



    }
    return(
        <div className="Question">
            <Container>
                <h1>Admin login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email" required>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setemail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            value={password}
                            onChange={e => setpassword(e.target.value)}
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


export default Admin;