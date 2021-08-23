import { useParams } from "react-router";
import { useState} from "react";

import { Questiondata } from "../questions";
import { Form, Button } from 'react-bootstrap'

const Textform = () => {
    const { floor_id, que_id, doc_id } = useParams();

    const question = Questiondata[floor_id][que_id]

    const [text_x, setText_x] = useState();
    const [text_y, setText_y] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const body = { post: {
            "response": {
                "x": parseInt(text_x),
                "y": parseInt(text_y)
            }
        }}

        const post_url = "https://quakestar.herokuapp.com/" + floor_id + "/" + que_id + "/"  + doc_id

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
        <div className="Question">
      
            <h2>{question.question}</h2>
            <p>{question.description}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>X-direction</Form.Label>
                <Form.Control type="input" placeholder="" onChange={e => setText_x(e.target.value)} value={text_x}/>
                <Form.Label>Y-direction</Form.Label>
                <Form.Control type="input" placeholder="" onChange={e => setText_y(e.target.value)} value={text_y}/>
                    <Button variant="primary" type="submit" disabled={isLoading}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
     



        </div>
    );
}

export default Textform;