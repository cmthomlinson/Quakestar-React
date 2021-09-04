import React, { Component }  from 'react';
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { Questiondata } from "../questions";
import { Form, Button } from 'react-bootstrap'

import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";

const useStateWithLocalStorage = que_id => {
    const [value, setValue] = React.useState({
            x: "",
            y: ""
        }
    );
   
    React.useEffect(() => {
      localStorage.setItem(que_id, {
            'x': value['x'],
            'y': value['y']
      });
    }, [value]);
   
    return [value, setValue];
};

const Textform = ({que_id, onformSubmit, response}) => {
    const { floor_id, doc_id } = useParams();

    const question = Questiondata[floor_id][que_id]
    const [value, setValue] = useStateWithLocalStorage(que_id);

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    function getscoreanddamage(floor_id, doc_id) {
        
        const url = "https://quakestar.herokuapp.com/sd/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result)
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(false);
    
            }
        )
    }

    useEffect(() => {
        getscoreanddamage(floor_id, doc_id)
    }, [])


    

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { post: {
            "response": {
                "x": parseInt(value.x),
                "y": parseInt(value.y)
            }
        }}

        console.log(value['x'])

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
        <div className="form">
            <h2>Strength: { items.score }</h2>
            <ImgStrength score={ items.score }/>
            <h2>Damage: { items.damage }</h2>
            <ImgDamage damage={ items.damage }/>
            <h2>{que_id}: {question.question}</h2>
            <p>{question.description}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>X-direction</Form.Label>
                <Form.Control type="input" onChange={e => setValue(prevState => ({...prevState, x: e.target.value}))}/>
                <Form.Label>Y-direction</Form.Label>
                <Form.Control type="input" onChange={e => setValue(prevState => ({...prevState, y: e.target.value}))}/>
                </Form.Group>
                <br />
                <p>{value.x} {value.y}</p>
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