import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';
import { Questiondata } from '../questions';



const Topalert = ({show, setShow, response, que_id, floor_id}) => {
    const question = Questiondata[floor_id][que_id]

    if (localStorage.getItem(que_id) != 0) {
        if (question.current_route === "text_question") {
            const submitted_line = "X: " + JSON.parse(localStorage.getItem(que_id)).x +"m" + "  Y: " + JSON.parse(localStorage.getItem(que_id)).y +"m"
            return (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Submitted</Alert.Heading>
                <p>Your response: <b>{ submitted_line }</b></p>
              </Alert>
            )
        }
        if (question.current_route === "option_question") {
            return (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Submitted</Alert.Heading>
                <p>Your response: <b>{ localStorage.getItem(que_id) }</b></p>
              </Alert>
            )
        }

    }
    else {
        return ""
    }


}

export default Topalert;