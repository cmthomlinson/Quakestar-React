import React, { Component }  from 'react';
import { Image } from "react-bootstrap"
import { Questiondata } from "../questions"

const Picture = ({floor_id, que_id}) => {
    
    const pic_name = "/img/" + Questiondata[floor_id][que_id]['img']['img_name']

    
    return  (
        <div className="picture">
            <Image src={process.env.PUBLIC_URL + '/img/Walls.png'}/>
        </div>

    )
    
}

export default Picture;