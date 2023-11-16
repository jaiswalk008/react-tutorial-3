import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies , setMovies] = useState([])
  const [loading , setLoading] = useState(false);
  const fetchMovieHandler = async () =>{
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    
    const transformedMovie = data.results.map(movie => {
      return {
        id:movie.episode_id,
        title:movie.title,
        openingText : movie.opening_crawl,
        releaseDate: movie.release_date
      }
    })
    setMovies(transformedMovie);
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading &&( movies.length>0? <MoviesList movies={movies} /> : <h1>Loading....</h1>)}
      </section>
    </React.Fragment>
  );
}

export default App;
