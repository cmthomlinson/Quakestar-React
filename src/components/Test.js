import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Questiondata } from '../questions';


 
const useStateWithLocalStorage = que_id => {
  const [value, setValue] = React.useState(
    localStorage.getItem(que_id) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(que_id, value);
  }, [value]);
 
  return [value, setValue];
};
 
const Test = () => {
    //submitContruct("1")
    const { floor_id, que_id } = useParams();
    const [value, setValue] = useStateWithLocalStorage(
        que_id 
    );
    const question = Questiondata[floor_id][que_id]
    const options = question.options

    const handleSubmit = e => {
        console.log(value)
    }
    return (
        <Container>
            <div>
                <h2>{que_id}: {question.question}</h2>
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Select aria-label="Default select example" onChange={e => setValue(e.target.value)} value={value}>
                        {options.map((option) => <option value={option}>{option}</option>)}
                    </Form.Select>
                </Form.Group>
                    <br />
                    <Button
                        variant="primary"
                        type="submit"
                    
                        onClick={handleSubmit}
                        >
                    Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};
 
export default Test;