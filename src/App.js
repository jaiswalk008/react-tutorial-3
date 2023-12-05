import React from 'react';

// import MoviesList from './components/MoviesList';
import './App.css';
// import AddMovie from './components/AddMovie';
import { Route ,Switch , Redirect } from "react-router-dom";
import Welcome from './components/pages/Welcome';
import Products from './components/pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './components/pages/ProductDetails';
function App() {
  // const [movies , setMovies] = useState([])
  // const [loading , setLoading] = useState(false);
  // const [error , setError] = useState(null);
  // const [timeoutId, setTimeoutId] = useState(null); // create a state variable for timeoutId
  
  // const fetchMovieHandler =useCallback(async () =>{
  //   setLoading(true);
  //   // clearTimeout(timeoutId) 
  //   console.log('retrying')
  //   try {
  //     const response = await fetch('https://react-tutorial-3-default-rtdb.firebaseio.com/movies.json');
      
  //     if(!response.ok){
  //       throw new Error('Something went wrong....Retrying')
  //     }  
  //     const data = await response.json();
  //     // console.log(data);
  //     const loadedMovies = [];
  //     for (const key in data){
  //       loadedMovies.push({
  //         id:key,
  //         title:data[key].title,
  //         openingText:data[key].openingText,
  //         releaseDate:data[key].date
  //       })
  //     }
      
  //    setMovies(loadedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //     const id = setTimeout(fetchMovieHandler, 5000)
  //     clearTimeout(timeoutId);
  //     setTimeoutId(id);
  //   }
    
  // },[]) 
  // const cancelHandler = (e) =>{
  //   setError(null);
  //   setLoading(false);
  //   clearTimeout(timeoutId) // clear the current timeout object
  // }
  // useEffect(() =>{
  //   fetchMovieHandler();
  // },[fetchMovieHandler])

  // const changeMovieHandler = (moviesList) => {
  //   setMovies(moviesList);
  // }
  // const addMovieHandler = async (movie) =>{
  //   console.log(movie);
  //   const response = await fetch('https://react-tutorial-3-default-rtdb.firebaseio.com/movies.json',{
  //     method:"POST",
  //     body:JSON.stringify(movie),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data.name)

  // }

  return (
    <React.Fragment>
      {/* <AddMovie onAddingMovie = {addMovieHandler}/>
      <section>
        <h1>Movies</h1>
      </section>
      <section>
        {loading && !error && ( movies.length>0? <MoviesList onDelete={changeMovieHandler} movies={movies} /> : <h1>Loading....</h1>)}
        {loading && error && <p>{error} <button onClick={cancelHandler}>Cancel retrying</button></p>}
      </section> */}
      <div>
        {/* "Using Switch without exact means that the router will match
         the first route whose path partially matches the current URL.
        When exact is not used, Switch makes sure the URL is partially matched, 
        allowing multiple routes to match simultaneously. With exact, Switch ensures 
        that the URL is completely matched for a specific route. */}
      <MainHeader/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products" exact>
          <Products/>
        </Route>
        <Route path="/products/:productId">
          <ProductDetails/>
        </Route>
      </Switch>
    </div>

    </React.Fragment>
  );
}

export default App;
