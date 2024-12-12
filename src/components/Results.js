import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router";

import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";


import { Questiondata } from "../questions";
import { Lookup } from '../lookup';

const checkResults = (floor_id, items) => {
    
    let uncompleted = 0
    for (let i = 1; i < Object.keys(Questiondata[floor_id]).length; i++) {
        const completed_i = "completed_" + i
        if (items[completed_i] == false) {
            uncompleted++
        }
    }
    if (uncompleted >= 1) {
        return uncompleted + " uncompleted questions - still in progress. Use naviagation bar to complete remaining questions"
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
        
        const url = "https://iidqtmz2yw.us-east-2.awsapprunner.com/results/" + floor_id + "/" + doc_id
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
        if (strength > 180) {
            return "very much higher strength than"
        }
        else {
            return Lookup['strength'][parseInt(strength)]
        }
    }

    const damage_lookup = (damage) => {
        if (damage > 80) {
            return "very much more damage than"
        }
        else {
            return Lookup['damage'][parseInt(damage)]
        }
    }

    const rate_strength = strength_lookup(strength)
    const rate_damage = damage_lookup(damage)

    const completed = checkResults(floor_id, items)
    var res = [];
    console.log(items)

    for (let i = 1; i < Object.keys(Questiondata[floor_id]).length ; i++) {
        const completed_i = "completed_" + i
        console.log(i)
        if (items[completed_i] === true && Questiondata[floor_id][i]['current_route'] === 'text_question') {
            const string = "X: " + items[i].x + "m" + "  Y: " + items[i].y + "m"
            res.push(string)
            localStorage.setItem(i, JSON.stringify(items[i]))
        }
        if (items[completed_i] === true && Questiondata[floor_id][i]['current_route'] === 'option_question') {
            res.push(items[i])
            localStorage.setItem(i, items[i])
        }
        if (items[completed_i] === true && Questiondata[floor_id][i]['current_route'] === "check_question") {
            
            const options = ["Steel sheet (Examples: Corrugated iron, long-run metal or similar weight)", "Heavy tiles (Examples: Clay, concrete or similar weight)", "Light tiles (Examples: Metal tiles, wooden shingles)", "Membrane roof (Example: Torch-on membrane on plywood sheets)", "Concrete slab with waterproof coating or membrane.", "Brick (URM)", "Slab", "Timber piles", "Concrete piles", "Engineered poles", "Concrete / Concrete block walls", "Concrete ", "Timber (Example: weatherboards) ", "Concrete block ", "Brick or brick veneer ", "Stucco / Monolithic or similar ", "Concrete", "Timber (Example: weatherboards)", "Concrete block", "Brick or brick veneer", "Stucco / Monolithic or similar"]
            const get_true = () => {
                const list = []
                for (let x in options) {
                    if (items[i][options[x]] == true) {
                        list.push(options[x] + "  ")
                    }
                }
                return list
            }
            localStorage.setItem(i, JSON.stringify(items[i]))
            res.push(get_true())
        }
        if (items[completed_i] === false) {
            res.push("Unsubmitted")
            localStorage.setItem(i, 0)
        }

        
    }

    console.log(res)


    const floor_index = {
        "1": "1 floor",
        "2": "2 floors",
        "3": "3 floors",
        "1b": "1 floor and basement",
        "2b": "2 floors and basement",
        "3b": "3 floors and basement"
    }

    const result_table_colour = (que_id) => {
        const completed_i = "completed_" + que_id
        if (items[completed_i] == false) {
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
                        <Col xs={8}>
                            <mark>{completed}</mark>
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
                    return (
                        <ListGroup.Item>
                            <Row>
                                <Col xs={2} className={result_table_colour(item+1)}>
                                    {item+1}
                                </Col>
                                <Col xs={8}>
                                    {Questiondata[floor_id][item+1]['question']} 
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