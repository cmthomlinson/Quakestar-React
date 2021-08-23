import { useParams } from "react-router";
import { Questiondata } from "../questions";
import { Container, Row, Col } from 'react-bootstrap'

import Optionform from "./Optionform";
import Textform from "./Textform";
import ScoreDamage from "./ScoreDamage";
import Button from "./Nextquebutton";
import Menu from "./Menu";


const Question = () => {
    const { floor_id, que_id } = useParams();
    const question = Questiondata[floor_id][que_id]

    if (question.current_route === "option_question" || question.current_route === "clad_question") {
        return (
            <Container>
                <div>
                    <Row>
                        <Col xs={9}>
                            <ScoreDamage/>
                            <Optionform/>
                            <Button/>
                        </Col>
                        <Col xs={1}>
                        </Col>
                        <Col>
                            <h1>Menu</h1>
                            <Menu/>

                        </Col>

                    </Row>
                </div>
            </Container>

        )
        

    }
    if (question.current_route === "text_question") {
        return (
            <Container>
                <div>
                    <Row>
                        <Col xs={9}>
                            <ScoreDamage/>
                            <Textform/>
                            <Button/>
                        </Col>
                        <Col xs={1}>
                        </Col>
                        <Col>
                            <h1>Menu</h1>
                            <Menu/>
                        </Col>

                    </Row>
                </div>
            </Container>
        )
    }
    
        
    
}

export default Question;