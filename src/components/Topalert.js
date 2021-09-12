import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';

const Topalert = ({show, setShow, response}) => {

    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Submitted</Alert.Heading>
            <p>{ response }</p>
          </Alert>
        )
    }
    else {
        return ""
    }


}

export default Topalert;