import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" class="image_card" src={movie.imageurl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>

        <Card.Text class="description_card" >{movie.description}</Card.Text>

        
        <h5 class="advantages_card"   >Zalety:</h5>
        {movie.advantages.map((a, index) => (
          <p className="actor" key={index}>
            {"• "+a}
          </p>
        ))}

          <br/>
          
        <h5 class="disadvantages_card" >Wady:</h5>
        {movie.disadvantages.map((a, index) => (
              <p className="actor" key={index}>
                {"• "+a}
              </p>
            ))}
        
          </Card.Body>
        </Card>
  );
};

export default MovieCard;

// title
// director
// description
// disadvantages
// imageurl
