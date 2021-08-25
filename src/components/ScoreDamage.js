import { useParams } from "react-router";
import { useState, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";
import Score from "./Score";

const ScoreDamage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const { floor_id, que_id, doc_id } = useParams();

    

    useEffect(() => {
        const url = "https://quakestar.herokuapp.com/sd/" + floor_id + "/" + doc_id
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(false);
              setItems(result);
            },
            (error) => {
              setIsLoaded(false);
              setError(error);
            }
          )
      }, [])

    return (
        <div className="Home">
          <h2>Strength: { items.score }</h2>
      
          <h2>Damage: { items.damage }</h2>
        </div>
    );
}

export default ScoreDamage;