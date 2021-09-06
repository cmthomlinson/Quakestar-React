import React, { Component }  from 'react';
import { Container, Image, Button } from "react-bootstrap";
import { useHistory } from 'react-router';

const Home = () => {
    
    const history = useHistory();

    return (
        <div className="Home">
            <Container>
            
                <div class="text-center">
                    <Image src={require('../img/Quakestar_sql.png')}/>
                    <br />
                    <br />
                    <h2>Welcome to QuakeStar House Check</h2>
                    <p>To start, click the button below, fill in your details and begin answering the questions</p>
                    <Button onClick={() => history.push('register')}>Start HouseCheck</Button>
                </div>

            </Container>
        </div>
    );
}

export default Home;