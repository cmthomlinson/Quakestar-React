import React, { Component }  from 'react';
import { Alert } from 'react-bootstrap';


const Resalert = ({alert, setAlert}) => {
    const user = localStorage.getItem('user')
    const email = JSON.parse(user)
    if (alert) {
        return (
            <Alert variant="info" onClose={() => setAlert(false)} dismissible>
            <Alert.Heading>An email was sent to <b>{email['email']}</b> with a link for your current results</Alert.Heading>
          </Alert>
        )

    }
    else {
        return ""
    }


}

export default Resalert;