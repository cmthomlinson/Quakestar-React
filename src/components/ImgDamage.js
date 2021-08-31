import { Image } from "react-bootstrap"

const ImgDamage = ({damage}) => {
    
    if (damage > 30) {
        return <Image src={process.env.PUBLIC_URL + '/img/1.PNG'}/>
    }
    if (damage > 30) {
        return <Image src={process.env.PUBLIC_URL + '/img/2.PNG'}/>
    }
    if (damage > 20) {
        return <Image src={process.env.PUBLIC_URL + '/img/3.PNG'}/>
    }
    if (damage > 10) {
        return <Image src={process.env.PUBLIC_URL + '/img/4.PNG'}/>
    }
    else {
        return <Image src={process.env.PUBLIC_URL + '/img/5.PNG'}/>
    }
    

}

export default ImgDamage;