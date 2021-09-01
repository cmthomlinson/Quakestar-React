import { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap'
import { useParams } from "react-router";

import { Questiondata } from "../questions";

import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";

const Optionform = ({que_id, onformSubmit, response}) => {
    const [option, setOption] = useState();
    const [submitted, setSubmitted] = useState(false);
  

    const { floor_id, doc_id } = useParams();
    const question = Questiondata[floor_id][que_id];
    
   

    
    function get_options(response) {
        const options = question.options
        if (response != 0) {
            options.splice(0, 0, response)
            let updated_options = [...new Set(options)];
            return updated_options
        }
        else{
            return options
        }
    }

    const options = get_options(response)
    
    console.log(options)
 
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
        setIsLoading(true)
        e.preventDefault();
        
        const body = { post: {
            "response": option
        }}

        onformSubmit(option, que_id)

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
 
            getscoreanddamage(floor_id, doc_id)
            console.log('Success:', data)
            
        })
        .catch((error) => {
            getscoreanddamage(floor_id, doc_id)
            console.error('Error:', error);
        });
        
    }


    
    return(
        <div className="form">
            <h2>Strength: { items.score }</h2>
            <ImgStrength score={ items.score }/>
            <h2>Damage: { items.damage }</h2>
            <ImgDamage damage={ items.damage }/>
            <h2>{que_id}: {question.question}</h2>
            <p>{question.description}</p>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Select aria-label="Default select example" onChange={e => setOption(e.target.value)} value={option}>
                    {options.map((option) => <option value={option}>{option}</option>)}
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