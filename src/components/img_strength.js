
const imgstrength = ({score}) => {
    
    if (score === "10") {
        return (
            <img src={process.env.PUBLIC_URL + '/img/0.PNG'}/>
        )
    }
    if (score < 67) {
        return <img src={process.env.PUBLIC_URL + '/img/1.PNG'}/>
    }
    if (score < 100) {
        return <img src={process.env.PUBLIC_URL + '/img/2.PNG'}/>
    }
    if (score < 150) {
        return <img src={process.env.PUBLIC_URL + '/img/3.PNG'}/>
    }
    if (score < 200) {
        return <img src={process.env.PUBLIC_URL + '/img/4.PNG'}/>
    }
    else {
        return <img src={process.env.PUBLIC_URL + '/img/5.PNG'}/>
    }
    

}

export default imgstrength;