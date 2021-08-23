import { useState} from "react";
import { Form, Button, Spinner } from 'react-bootstrap'
import { useParams } from "react-router";

import { Questiondata } from "../questions";

import Nextquebutton from "./Nextquebutton";
import LoadingSpinner from "./LoadingSpinner";

const Optionform = () => {
    const [option, setOption] = useState();
    const [submitted, setSubmitted] = useState(false);

    const { floor_id, que_id, doc_id } = useParams();
    const question = Questiondata[floor_id][que_id];
    const options = question.options

    const [isLoading, setIsLoading] = useState(false);

    

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { post: {
            "response": option
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
            setIsLoading(false);
            console.log('Success:', data)
            
        })
        .catch((error) => {
            setIsLoading(false);
            console.error('Error:', error);
        });
        
    }
    
    return(
        <div className="Question">
            <h2>{question.question}</h2>
            <p>{question.description}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Select aria-label="Default select example" onChange={e => setOption(e.target.value)} value={option}>
                        {options.map((option) => <option value={option}>{option}</option>)}
                    </Form.Select>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" disabled={isLoading}>Submit</Button>
                
            </Form>
        </div>
    )
    
}

export default Optionform;