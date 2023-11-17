import React from 'react';

import classes from './Movie.module.css';
import Button from './UI/Button/Button';

const Movie = (props) => {
  // console.log(props);
  
  
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button onClick={() => props.onClick(props.id)}>Delete</Button>
    </li>
  );
};

export default Movie;
