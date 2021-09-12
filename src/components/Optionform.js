import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap'
import { useParams } from "react-router";

import { Questiondata } from "../questions";



const get_options = (que_id, floor_id) => {
    const question = Questiondata[floor_id][que_id];
    const options = question.options
    if (localStorage.getItem(que_id) != 0) {
        options.splice(0, 0, localStorage.getItem(que_id))
        let updated_options = [...new Set(options)];
        return updated_options
    }
    else {
        return options
    }
}


const Optionform = ({que_id, set_res, set_colour, setShow}) => {
    const { floor_id, doc_id } = useParams();
    const question = Questiondata[floor_id][que_id];
    const options = question.options
    const [value, setValue] = useState(options[0]);
    const [new_options, setNew_options] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const get_options = (que_id, floor_id) => {

        if (localStorage.getItem(que_id) != 0) {
            options.splice(0, 0, localStorage.getItem(que_id))
            let updated_options = [...new Set(options)];
            setNew_options(updated_options)

        }
        else {
            setNew_options(options)
        }
    }

    const check_submitted = (que_id) => {
        if (value != 0) {
            
            setShow(true)

        }
        else {
            setShow(false)
        }
    }

    useEffect(() => {
        set_colour('primary');
        setValue(options[0]);
        get_options(que_id, floor_id);
        set_res(" ");
        setShow(false);
    }, [que_id]);

    const handleSubmit = e => {
        setIsLoading(true);
        e.preventDefault();
        
        check_submitted(que_id)
        
        
        const body = { post: {
            "response": value
        }};

        
        const post_url = "https://quakestar.herokuapp.com/submit/" + floor_id + "/" + que_id + "/"  + doc_id;

        fetch(post_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(data => {
 
            set_res(value);
            localStorage.setItem(que_id, value)
            setIsLoading(false)
            console.log('Success:', data)
            
        })
        .catch((error) => {
            
            setIsLoading(false)
            console.error('Error:', error);
        });
        
        
    }


    
    return(
        <div>

            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Select aria-label="Default select example" onChange={e => setValue(e.target.value)}>
                    {new_options.map((option, index) => <option key={option} value={option}>{option}</option>)}
                </Form.Select>
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
    )
    
}

export default Optionform;