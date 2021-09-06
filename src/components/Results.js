import React, { Component }  from 'react';
import { useState, useEffect } from "react";


import ImgStrength from "./ImgStrength";
import ImgDamage from "./ImgDamage";

import { Questiondata } from "../questions";
import { Lookup } from '../lookup';

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

    const rate_strength = Lookup['strength'][items.score]
    const rate_damage = Lookup['damage'][items.damage]

    var res = [];
    for (let i = 1; i < Object.keys(Questiondata[floor_id]).length; i++) {
        if (Questiondata[floor_id][i]['current_route'] === 'text_question') {
            const item = JSON.parse(localStorage.getItem(i))
            res.push(item)
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


    return (
        <div class="text-center">
            <h1>Strength: { items.score }</h1>
            <ImgStrength score={ items.score }/>
            <h1>Damage: { items.damage }</h1>
            <ImgDamage damage={ items.damage }/>
            <h4>Your house is <b>{rate_strength}</b> a new code-compliant building</h4>
            <h4>Your house is <b>{rate_damage}</b> a new code-compliant building</h4>
            <br />
            <h4>Your submitted answers</h4>
            {res.map((index, item)=>{
                if (Questiondata[floor_id][item+1]['current_route'] === 'text_question') {
                    return (
                        <h3 variant="primary">{item+1}:  x: {index['x']} y: {index['y']}</h3>
                    )
                }
           
                return (
                    <h3 variant="primary">{item+1}:  {index}</h3>
                )

            })}
        </div>
    )
}

export default Results;