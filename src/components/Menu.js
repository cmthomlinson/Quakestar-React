import { useParams } from "react-router";
import { Questiondata } from "../questions";

import { Button as ReactButton } from "react-bootstrap";


const Menu = () => {

    const { floor_id, que_id, doc_id } = useParams();

    for (var i = 0; i < parseInt(Object.keys(Questiondata[floor_id]).length); i++) {
        const url = "http://localhost:3000/question/" + floor_id + "/" + i + "/" + doc_id
        return " <a href='" + url + "'>"+ Questiondata[floor_id][i] + "</a>";
    }

}

export default Menu;