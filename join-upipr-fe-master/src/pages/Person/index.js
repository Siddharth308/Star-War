import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
function Person() {
  const [data, setData] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const { id } = useParams();
  console.log(id);
  let q = id.replace("%20", " ");

  const getPerson = () => {
    fetch(`https://swapi.dev/api/people/?search=${q}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const getMovies = () => {
   
    console.log(films, "hii");
    films.map((film,index) => {
      fetch(film)
        .then((response) => response.json())
        .then((movie) => {
          movies[index] = movie.title
          console.log(movie.title);
         
        })
        .catch((err) => console.log(err));
        console.log(movies)
    });
    
  };
  React.useEffect(() => {
    if (data.length == 0) getPerson();
    else getMovies();
  }, [data,movies]);

  const {
    name,
    height,
    mass,
    birth_year,
    hair_color,
    films,
    showLink = true,
  } = data;
  return (
    <div className="bg">
      <div className="card">
        <span className="card__span">PRO</span>
      
        <h3>{name}</h3>
        <h5>
          Height: {height}, Mass: {mass}
        </h5>
        <p>Birth Year: {birth_year}</p>
        <h3>Movies</h3>
        <div className="card__button">
      
        {movies?.map(m => <button>{movies[0]}lkjlk</button>) }
        </div>
      </div>
    </div>
  );
}

export default Person;
