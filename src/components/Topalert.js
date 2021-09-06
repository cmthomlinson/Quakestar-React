import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';

const Topalert = ({show, setShow}) => {

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>You have not completed all the questions</Alert.Heading>
            <p>
                Make sure you have submitted an answer for each question.
            </p>
          </Alert>
        )
    }
    else {
        return ""
    }


}

export default Topalert;