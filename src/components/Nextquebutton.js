import { useParams } from "react-router";
import { Questiondata } from "../questions";

import { Button as ReactButton } from "react-bootstrap";


const Button = () => {

    const { floor_id, que_id, doc_id } = useParams();


    const prev_que = que_id - 1
    const next_que = parseInt(que_id) + 1
    const prev_link = "http://localhost:3000/question/" + floor_id + "/" + prev_que + "/" + doc_id
    const next_link = "http://localhost:3000/question/" + floor_id + "/" + next_que + "/" + doc_id
    const results_link = "http://localhost:3000/results/"+ floor_id + "/" + doc_id

    if (que_id === "1") {
        return (
            <div>
                <ReactButton href={next_link}>Next Question</ReactButton>
            </div>
            
        )
    }
    if (parseInt(que_id) === parseInt(Object.keys(Questiondata[floor_id]).length)) {
        return (
            <div>
                <ReactButton href={prev_link}>Previous Question</ReactButton>
                <ReactButton href={results_link}>Results</ReactButton> 
            </div>


        )
    }
    else {
        return (
            <div>
                <ReactButton href={prev_link}>Previous Question</ReactButton>
                <ReactButton href={next_link}>Next Question</ReactButton> 
            </div>

        )
    }
}

export default Button;