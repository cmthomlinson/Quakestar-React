import React, { Component }  from 'react';
import { Image } from "react-bootstrap"

const ImgStrength = ({score}) => {
    
    if (score < 34) {
        
        return <Image src={require('../img/0.png')}/>
    }
    if (score < 67) {
        return <Image src={require('../img/1.png')}/>
    }
    if (score < 100) {
        return <Image src={require('../img/2.png')}/>
    }
    if (score < 150) {
        return <Image src={require('../img/3.png')}/>
    }
    if (score < 200) {
        return <Image src={require('../img/4.png')}/>
    }
    else {
        return <Image src={require('../img/5.png')}/>
    }
    

}

export default ImgStrength;