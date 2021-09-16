import React, { Component }  from 'react';
import { Accordion } from 'react-bootstrap';

const Info = () => {
    

    return (
        <div>
            <div >
                <Accordion defaultActiveKey="0" flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <div class="">
                            <h3>HouseCheck</h3> 
                            <h5 class="text-muted">by QuakeStar</h5> 
                        </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>
                            Welcome to the <b>Earthquake safety self-assessment tool
                            (HouseCheck)</b> for NZ single residences. Ratings are 1 to 5
                            stars, as used by the US Resiliency Council system.
                            Scores are for Strength of a house and likely Damage.
                        </p>
                        <p>
                            In order for strength and damage scores to be calculated, the questionnaire has pre-inserted answers.
                            Sometimes your strength and/or damage score may not change, this is because your submitted answer
                            is the same as the pre-inserted answer for that question.
                        </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div>
                <small class="version text-muted">HouseCheck version 2.0</small>
            </div>
            
        </div>

        
    );
}

export default Info;