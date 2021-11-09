import React, { Component }  from 'react';
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { Questiondata } from "../questions";
import { Form, Button } from 'react-bootstrap'
import Topalert from './Topalert';



const Checkform = ({que_id, setShow, set_res}) => {
    const { floor_id, doc_id } = useParams();

    const question = Questiondata[floor_id][que_id]
    const options = question.options
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(que_id)));
    const updated_options = []
    const updated_options1 = []

    for (let i = 0; i < options.length; i++) {
        updated_options.push({
            option: options[i]
        })
    }

    console.log(value)

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem(que_id)))
    }, [que_id])

    const checkboxes = [
        {
            option: '1',
        },
        {
            option: '2',
        },
        {
            option: '3',
        },
        {
            option: '4',
        }
    ];
  
    const handleChange = (event) => {
        // updating an object instead of a Map
        setValue({...value, [event.target.name] : event.target.checked });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        console.log("checkedItems: ", value);
        localStorage.setItem(que_id, JSON.stringify(value))
        
        const body = { post: {
            "response": value
        }}


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
            localStorage.setItem(que_id, JSON.stringify(value))
            set_res(value)
            setIsLoading(false);
            console.log('Success:', data)
            
        })
        .catch((error) => {
            set_res(value)
            setIsLoading(false);
            console.error('Error:', error);
        });

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                
                {
                    updated_options.map((option) => (
                        <div key={option} className="mb-3">
                        <Form.Check 
                            type="checkbox"
                            name={option.option}
                            id={option.option}
                            label={option.option}
                            checked={value[option.option]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                
                <br />
                <Button
                    variant="primary"
                    type="submit"
                    disabled={isLoading}
                    onClick={!isLoading ? handleSubmit : null}
                    >
                    {isLoading ? 'Loading…' : 'Submit'}
                </Button>
                <br />
                <br />
                <Topalert setShow={setShow} que_id={que_id} floor_id={floor_id}/>
            </Form>
     



        </div>
    );
}

export default Checkform;