import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';


const Resalert = ({alert, setAlert}) => {

    if (alert) {
        return (
            <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
            <Alert.Heading>You need to submit a response</Alert.Heading>
          </Alert>
        )

    }
    else {
        return ""
    }


}

export default Resalert;