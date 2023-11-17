import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';
import Button from './UI/Button/Button';

const MovieList = (props) => {
  // console.log(props)
  const deleteHandler = async (id) => {
    try {
      await fetch(`https://react-tutorial-3-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: 'DELETE',
      });
      props.onDelete(props.movies.filter((movie)=> movie.id!==id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onClick={deleteHandler}
        />
        
      ))}
      
    </ul>
  );
};

export default MovieList;
