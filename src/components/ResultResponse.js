import React, { Component }  from 'react';
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

import { Questiondata } from '../questions';

const ResultResponse = ({que_id, response}) => {
    const { floor_id, doc_id } = useParams();

    return (
        <div className="">
            
            <ListGroup.Item>
                <Row>
                    <Col xs={2} class="border-right">
                        {que_id}
                    </Col>
                    <Col xs={4}>
                        {Questiondata[floor_id][que_id]['question']} {response}
                        < br/>
                        < br/>
                        < br/>
                        < br/>
                    </Col>
                </Row>
            </ListGroup.Item>
            

        </div>
    );
}

export default ResultResponse;