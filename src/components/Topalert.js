import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';
import { Questiondata } from '../questions';



const Topalert = ({setShow, que_id, floor_id}) => {
    const question = Questiondata[floor_id][que_id]

    if (localStorage.getItem(que_id) != 0) {
        if (question.current_route === "check_question") {
            const options = ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane.", "Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls", "Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar ", "Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"]
            const get_true = () => {
                const response = JSON.parse(localStorage.getItem(que_id))
                const list = []
                for (let x in options) {
                    if (response[options[x]] == true) {
                        list.push(options[x] + " ")
                    }
                }
                return list
            }
            return (
                <Alert variant="success">
                <h5>Your saved response: <b>{ get_true() }</b></h5>
              </Alert>
            )
        }
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