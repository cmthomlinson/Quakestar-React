import React, { Component, useState }  from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router';
import { Questiondata } from '../questions';

function set_localstorage(data) {
    const body = { user: {
        "name": data['name'],
        "email": data['email'],
        "address": data['address'],
        "suburb": data['suburb'],
        "city": data['city'],
        "postcode": data['postcode'],
        "floor_id": data['floor_id']
    }}
    localStorage.clear();
    localStorage.setItem('floor_id', data['floor_id'])
    localStorage.setItem('user', JSON.stringify(body['user']))
    
    for(var i in data) {
        if (Questiondata[data['floor_id']][toString(i)].current_route === "text_question") {
            localStorage.setItem(i, JSON.stringify(data[i]))
        }
        else {
            localStorage.setItem(i, data[i])
        }
    }
        
}

const Record = () => {
    const [doc_id, setDoc_id] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState([]);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);

        const post_url = "https://quakestar.herokuapp.com/doc/" + doc_id;

        fetch(post_url)
        .then(response => response.json())
        .then(data => {
            setValue(data);
            setIsLoading(false);
            console.log('Success:', data);
            const end = Object.keys(Questiondata[data['floor_id']]).length
            const next_route = "/question/" + data['floor_id'] +"/" + end + "/" + doc_id
            history.push(next_route)
            
        })
        .catch((error) => {
            
            setIsLoading(false)
            console.error('Error:', error);
        });
    }

    return (
        <div className="Home">
            <Container>
                <p></p>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>HouseCheck id</Form.Label>
                    <Form.Control type="input" onChange={e => setDoc_id(e.target.value)}/>
                </Form>
                <br />
                <Button
                    variant="primary"
                    type="submit"
                    disabled={isLoading}
                    onClick={!isLoading ? handleSubmit : null}
                    >
                    {isLoading ? 'Loading…' : 'Submit'}
                </Button>
            </Container>
        </div>
    );
}

export default Record;