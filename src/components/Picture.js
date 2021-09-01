import React, { Component }  from 'react';
import { Image } from "react-bootstrap"
import { Questiondata } from "../questions"

const Picture = ({floor_id, que_id}) => {
    
    
    

    if (Questiondata[floor_id][que_id]['img']['img_name'] === "Quakestar_280px.png") {
        return ""
    }
    if (Questiondata[floor_id][que_id]['img']['img_name'] === "Walls.png") {
        return <Image src={require('../img/Walls.png')}/>
    }
    if (Questiondata[floor_id][que_id]['img']['img_name'] === "Floor_area.png") {
        return <Image src={require('../img/Floor_area.png')}/>
    }
    else {
        return ""
    }
    

    
}

export default Picture;