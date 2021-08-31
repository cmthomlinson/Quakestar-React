import { Image } from "react-bootstrap"

const ImgStrength = ({score}) => {
    
    if (score < 34) {
        
        return <Image src={process.env.PUBLIC_URL + '/img/0.PNG'}/>
    }
    if (score < 67) {
        return <Image src={process.env.PUBLIC_URL + '/img/1.PNG'}/>
    }
    if (score < 100) {
        return <Image src={process.env.PUBLIC_URL + '/img/2.PNG'}/>
    }
    if (score < 150) {
        return <Image src={process.env.PUBLIC_URL + '/img/3.PNG'}/>
    }
    if (score < 200) {
        return <Image src={process.env.PUBLIC_URL + '/img/4.PNG'}/>
    }
    else {
        return <Image src={process.env.PUBLIC_URL + '/img/5.PNG'}/>
    }
    

}

export default ImgStrength;