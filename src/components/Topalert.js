import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';
import { Questiondata } from '../questions';



const Topalert = ({setShow, que_id, floor_id}) => {
    const question = Questiondata[floor_id][que_id]

    if (localStorage.getItem(que_id) != 0) {
        if (question.current_route === "text_question") {
            const submitted_line = "X: " + JSON.parse(localStorage.getItem(que_id)).x +"m" + "  Y: " + JSON.parse(localStorage.getItem(que_id)).y +"m" 
            return (
                <Alert variant="success">
                <h5>Your saved response: <b>{ submitted_line }</b></h5>
              </Alert>
            )
        }
        if (question.current_route === "option_question"|| question.current_route === "clad_question") {
            return (
                <Alert variant="success">
                <h5>Your saved response: <b>{ localStorage.getItem(que_id) }</b></h5>
              </Alert>
            )
        }

    }
    else {
        return ""
    }


}

export default Topalert;