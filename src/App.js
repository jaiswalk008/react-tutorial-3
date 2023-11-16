import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies , setMovies] = useState([])
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null); // create a state variable for timeoutId
  const fetchMovieHandler = async () =>{
    setLoading(true);
    // clearTimeout(timeoutId) 
    console.log('retrying')
    try {
      const response = await fetch('https://swapi.dev/api/film');
      
      if(!response.ok){
        throw new Error('Something went wrong....Retrying')
      }  
      const data = await response.json();
      const transformedMovie = data.results.map(movie => {
        return {
          id:movie.episode_id,
          title:movie.title,
          openingText : movie.opening_crawl,
          releaseDate: movie.release_date
        };
      })
     setMovies(transformedMovie);
    } catch (error) {
      setError(error.message);
      const id = setTimeout(fetchMovieHandler, 5000)
      clearTimeout(timeoutId);
      setTimeoutId(id);
    }
    
  }
  const cancelHandler = (e) =>{
    setError(null);
    setLoading(false);
    clearTimeout(timeoutId) // clear the current timeout object
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && !error && ( movies.length>0? <MoviesList movies={movies} /> : <h1>Loading....</h1>)}
        {loading && error && <p>{error} <button onClick={cancelHandler}>Cancel retrying</button></p>}
      </section>
    </React.Fragment>
  );
}

export default App;
