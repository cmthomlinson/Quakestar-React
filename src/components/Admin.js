import React, { Component }  from 'react';
import { Container } from "react-bootstrap";

const Admin = () => {
    

    return (
        <div className="Home">
            <Container>
                <h2>Admin</h2>
                <p>This admin page will allow authenicated users to view all the submitted questionnaires</p>
            </Container>
        </div>
    );
}

export default Admin;