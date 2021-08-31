import { Image } from "react-bootstrap"

const ImgDamage = ({damage}) => {
    
    if (damage > 30) {
        return <Image src={process.env.PUBLIC_URL + '/img/1.png'}/>
    }
    if (damage > 30) {
        return <Image src={process.env.PUBLIC_URL + '/img/2.png'}/>
    }
    if (damage > 20) {
        return <Image src={process.env.PUBLIC_URL + '/img/3.png'}/>
    }
    if (damage > 10) {
        return <Image src={process.env.PUBLIC_URL + '/img/4.png'}/>
    }
    else {
        return <Image src={process.env.PUBLIC_URL + '/img/5.png'}/>
    }
    

}

export default ImgDamage;