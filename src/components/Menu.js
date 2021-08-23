import { useParams } from "react-router";
import { Questiondata } from "../questions";

import { Button as ReactButton } from "react-bootstrap";


const Menu = () => {
    const { floor_id, que_id, doc_id } = useParams();

    const elements = ['one', 'two', 'three'];
    return (
      <ul>
        {elements.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    )

}

export default Menu;