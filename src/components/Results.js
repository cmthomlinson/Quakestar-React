import React, { Component }  from 'react';
import { useState, useEffect } from "react";


import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";

import { Questiondata } from "../questions";

const Results = ({submited, floor_id, doc_id}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    function getscoreanddamage(floor_id, doc_id) {
        
        const url = "https://quakestar.herokuapp.com/sd/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result)
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(false);
    
            }
        )
    }

    useEffect(() => {
        getscoreanddamage(floor_id, doc_id)
    }, [])

    var res = [];
    for(var i in submited) {
        res.push(submited[i]);
        
    }
    return (
        <div>
            <h2>Strength: { items.score }</h2>
            <ImgStrength score={ items.score }/>
            <h2>Damage: { items.damage }</h2>
            <ImgDamage damage={ items.damage }/>
            {res.map((index, item)=>{

            if (index == 0) {
                return (
                    <h2 variant="primary">{item+1}:  Unsubmitted</h2>
                )
            }
            else {
                return (
                    <h2 variant="primary">{item+1}:  {index}</h2>
                )
            }  
            })}
        </div>
    )
}

export default Results;