import { useParams } from "react-router";
import { Questiondata } from "../questions";

import Optionform from "./Optionform";
import Textform from "./Textform";
import Container from 'react-bootstrap/Container'
import ScoreDamage from "./ScoreDamage";
import Button from "./Nextquebutton";

const Question = () => {
    const { floor_id, que_id } = useParams();
    const question = Questiondata[floor_id][que_id]

    if (question.current_route === "option_question" || question.current_route === "clad_question") {
        return (
            <Container>
                <div>
                    <ScoreDamage/>
                    <Optionform/>
                    <Button/>
               

                </div>
            </Container>

        )
        

    }
    if (question.current_route === "text_question") {
        return (
            <Container>
                <div>
                    <ScoreDamage/>
                    <Textform/>
                    <Button/>
                
                </div>
            </Container>
        )
    }
    
        
    
}

export default Question;