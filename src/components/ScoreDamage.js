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
          <h2>Score: {isLoaded ? <LoadingSpinner /> : null }{ items.score }</h2>
          <img src={process.env.PUBLIC_URL + '/img/4.PNG'}/>
          
          <h2>Damage: {isLoaded ? <LoadingSpinner /> : null }{items.damage}</h2>
          <img src={process.env.PUBLIC_URL + '/img/2.PNG'}/>
        </div>
    );
}

export default ScoreDamage;