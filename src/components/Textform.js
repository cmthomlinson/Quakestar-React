import React, { Component }  from 'react';
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { Questiondata } from "../questions";
import { Form, Button } from 'react-bootstrap'




const Textform = ({que_id, setShow}) => {
    const { floor_id, doc_id } = useParams();

    const question = Questiondata[floor_id][que_id]
    const [value, setValue] = useState({
        x: localStorage.getItem(que_id).x || "",
        y: localStorage.getItem(que_id).y || ""
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setValue({
            x: JSON.parse(localStorage.getItem(que_id)).x || "",
            y: JSON.parse(localStorage.getItem(que_id)).y || ""
        })
        setShow(false)
    }, [que_id])

    const check_submitted = (que_id) => {
        if (value != 0) {
            
            setShow(true)

        }
        else {
            setShow(false)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        const body = { post: {
            "response": {
                "x": parseInt(value.x),
                "y": parseInt(value.y)
            }
        }}

        localStorage.setItem(que_id, JSON.stringify(value))
        check_submitted(que_id)

        const post_url = "https://quakestar.herokuapp.com/submit/" + floor_id + "/" + que_id + "/"  + doc_id

        fetch(post_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            console.log('Success:', data)
            
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('Error:', error);
        });

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>X-direction</Form.Label>
                <Form.Control type="input" onChange={e => setValue(prevState => ({...prevState, x: e.target.value}))} value={value['x']}/>
                <Form.Label>Y-direction</Form.Label>
                <Form.Control type="input" onChange={e => setValue(prevState => ({...prevState, y: e.target.value}))} value={value['y']}/>
                </Form.Group>
                <br />
                <Button
                    variant="primary"
                    type="submit"
                    disabled={isLoading}
                    onClick={!isLoading ? handleSubmit : null}
                    >
                    {isLoading ? 'Loading…' : 'Submit'}
                </Button>
        
                
            </Form>
     



        </div>
    );
}

export default Textform;