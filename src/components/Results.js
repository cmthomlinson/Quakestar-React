import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Form, Button, Container } from 'react-bootstrap'

const Home = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const { floor_id, que_id, doc_id } = useParams();

    useEffect(() => {
        const url = "https://quakestar.herokuapp.com/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
            (error) => {
              setError(error);
            }
          )
      }, [])

    return (
        <Container>
            <div className="Home">
                <h2>Results for</h2>
                <p>{ items.firstname} { items.lastName}</p>
                <p>{ items.address }</p>
                <p>Score: { items.score }</p>
                <p>Damage: { items.damage }</p>
            </div>
        </Container>

    );
}

export default Home;