import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { Questiondata } from "../questions";
import { Form, Button } from 'react-bootstrap'

import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";

const Textform = ({que_id, onformSubmit, response}) => {
    const { floor_id, doc_id } = useParams();

    const question = Questiondata[floor_id][que_id]

    const [text_x, setText_x] = useState();
    const [text_y, setText_y] = useState();

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

    function get_reponse(response, xy) {
        if (response === 0) {
            return 
        }
        else {
            return response[xy]
        }
    }

    const x_value = get_reponse(response, 'x')
    const y_value = get_reponse(response, 'y')

    

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { post: {
            "response": {
                "x": parseInt(text_x),
                "y": parseInt(text_y)
            }
        }}

        onformSubmit(body['post']['response'], que_id)

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
                <Form.Control type="input" onChange={e => setText_x(e.target.value)} value={x_value}/>
                <Form.Label>Y-direction</Form.Label>
                <Form.Control type="input" onChange={e => setText_y(e.target.value)} value={y_value}/>
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