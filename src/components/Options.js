import { useParams } from "react-router";
import { Questiondata } from "../questions";

const getOptions = () => {
    const { floor_id, que_id } = useParams();
    const question = Questiondata[floor_id][que_id];
    const options = question.options
    return (
        <Form.Select aria-label="Default select example">
            {options.map((option) => <option value={option}>{option}</option>)}
        </Form.Select>
    )
}

export default getOptions;