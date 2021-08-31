import { Image } from "react-bootstrap"
import { Questiondata } from "../questions"

const Picture = ({floor_id, que_id}) => {
    
    const pic_name = "/img/" + Questiondata[floor_id][que_id]['img']['img_name']

    if (pic_name === "/img/Quakestar_280px.png") {
        return ""
    }
    else {
        return  (
            <div className="picture">
                <Image src={process.env.PUBLIC_URL + pic_name} rounded />
            </div>

        )
    }
}

export default Picture;