import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router";

import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";


import { Questiondata } from "../questions";
import { Lookup } from '../lookup';

const checkResults = (floor_id) => {
    
    let uncompleted = 0
    for (let i = 0; i < Object.keys(Questiondata[floor_id]).length; i++) {
        if (localStorage.getItem(i) == 0) {
            uncompleted++
        }
    }
    if (uncompleted >= 1) {
        return uncompleted + " uncompleted questions"
    }
    else {
        return "Completed - congratulations"
    }
    

}

const Results = ({submited, floor_id, doc_id, strength, damage}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [detailsLoaded, setdetailsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    

    function getDetails(floor_id, doc_id) {
        
        const url = "https://quakestar.herokuapp.com/results/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result)
                setIsLoading(false);
                setdetailsLoaded(true);
            },
            (error) => {
                setIsLoading(false);
                setdetailsLoaded(true);
            }
        )
    }


    useEffect(() => {
        getDetails(floor_id, doc_id)
    }, [])

    const strength_lookup = (strength) => {
        if (strength > 250) {
            return "Very much higher strength than"
        }
        else {
            return Lookup['strength'][strength]
        }
    }

    const damage_lookup = (damage) => {
        if (damage > 99) {
            return "Very much more damage than"
        }
        else {
            return Lookup['damage'][strength]
        }
    }

    const rate_strength = strength_lookup(strength)
    const rate_damage = damage_lookup(damage)

    const completed = checkResults(floor_id)
    var res = [];
    for (let i = 1; i < Object.keys(Questiondata[floor_id]).length; i++) {
        if (Questiondata[floor_id][i]['current_route'] === 'text_question') {
            const item = JSON.parse(localStorage.getItem(i))
            const text = "x: " + item['x'] + "  y: " + item['y']
        
            res.push(text)
        }
        else {
            const item = localStorage.getItem(i)
            if (item == 0 || item == undefined) {
                res.push('Unsubmitted')
            }
            else {
                res.push(item)
            }
        }

        
    }

    const floor_index = {
        "1": "1 floor",
        "2": "2 floors",
        "3": "3 floors",
        "1b": "1 floor and basement",
        "2b": "2 floors and basement",
        "3b": "3 floors and basement"
    }

    const result_table_colour = (que_id) => {
        if (localStorage.getItem(que_id) == 0) {
            return "results-red"
        }
        else {
            return "results-qreen"
        }
    }

    
    return (
        <div class="">
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>HouseCheck ID</b></p>
                        </Col>
                        <Col xs={8}>
                            <p>{ doc_id }</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Name</b></p>
                        </Col>
                        <Col xs={8}>
                            <p>{ items.name } - { items.email }</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Address</b></p>
                        </Col>
                        <Col xs={8}>
                            <p>{ items.address } { items.postcode }, { items.city } - { floor_index[items.floor_id] }</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Status:</b></p>
                        </Col>
                        <Col xs={4}>
                            <p><b>{completed}</b></p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Strength:</b></p>
                        </Col>
                        <Col xs={9}>
                            <h5 className="d-inline">{ strength }    </h5><ImgStrength className="d-inline" score={ strength }/><p>Your house is <i>{rate_strength}</i> a new code-compliant building</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Damage:</b></p>
                        </Col>
                        <Col xs={9}>
                            <h5 className="d-inline">{ damage }    </h5><ImgDamage  className="d-inline" damage={ damage }/><p>Your house would have <i>{rate_damage}</i> a new code-compliant building</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={2} className="bg-light">
                            <p><b>Last updated</b></p>
                        </Col>
                        <Col xs={8}>
                            <p>{ items.last_updated }</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <br />
            </ListGroup>

            <ListGroup>
                <ListGroup.Item>
                    <b>Your responses</b>
                </ListGroup.Item>
                {res.map((index, item)=>{
                    if (Questiondata[floor_id][item+1]['current_route'] === 'text_question') {
    
                        return (
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={2} className={result_table_colour(item+1)}>
                                        {item+1}
                                    </Col>
                                    <Col xs={8}>
                                        {Questiondata[floor_id][parseInt(item+1)]['question']} 
                                        < br/>
                                        < br/>
                                        <mark>{index}</mark>
                                        < br/>
                                        < br/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    }
                    if (Questiondata[floor_id][item+1]['current_route'] === 'check_question') {
                   
                        return (
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={2} className={result_table_colour(item+1)}>
                                        
                                        {item+1}
                                    </Col>
                                    <Col xs={8}>
                                        {Questiondata[floor_id][parseInt(item+1)]['question']} 
                                        < br/>
                                        < br/>
                                        <mark>{index}</mark>
                                        < br/>
                                        < br/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    }
            
                    return (
                        <ListGroup.Item>
                            <Row>
                                <Col xs={2} className={result_table_colour(item+1)}>
                                    {item+1}
                                </Col>
                                <Col xs={8}>
                                    {Questiondata[floor_id][parseInt(item+1)]['question']} 
                                    < br/>
                                    < br/>
                                    <mark>{index}</mark>
                                    < br/>
                                    < br/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )

                })}
            </ListGroup>

        </div>
    )
    


}

export default Results;