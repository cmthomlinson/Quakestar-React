import React, { Component }  from 'react';
import { Image } from "react-bootstrap"

const ImgDamage = ({damage}) => {
    if (damage > 80) {
        return <Image src={require('../img/0.png')}/>
    }
    if (damage < 80) {
        return <Image src={require('../img/1.png')}/>
    }
    if (damage < 40) {
        return <Image src={require('../img/2.png')}/>
    }
    if (damage < 20) {
        return <Image src={require('../img/3.png')}/>
    }
    if (damage < 10) {
        return <Image src={require('../img/4.png')}/>
    }
    if (damage < 5) {
        return <Image src={require('../img/5.png')}/>
    }
    

}

export default ImgDamage;