import React, { Component }  from 'react';
import { Image } from "react-bootstrap"

const ImgStrength = ({score}) => {
    
    if (score < 33) {
        return <Image src={require('../img/0.png')}/>
    }
    if (score < 59) {
        return <Image src={require('../img/1.png')}/>
    }
    if (score < 84) {
        return <Image src={require('../img/2.png')}/>
    }
    if (score < 129) {
        return <Image src={require('../img/3.png')}/>
    }
    if (score < 179) {
        return <Image src={require('../img/4.png')}/>
    }
    else {
        return <Image src={require('../img/5.png')}/>
    }
    

}

export default ImgStrength;