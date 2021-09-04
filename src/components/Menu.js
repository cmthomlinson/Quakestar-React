import { useParams } from "react-router";
import { Questiondata } from "../questions";

import { Button } from "react-bootstrap";


const Menu = ({onClick}) => {


    const elements = ['one', 'two', 'three'];
    return (
        <Button onClick={onClick}></Button>
    )

}

export default Menu;