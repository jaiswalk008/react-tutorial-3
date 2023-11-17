import { useState } from 'react';
import Button from './UI/Button/Button'
const AddMovie = (props) =>{
    const [title ,setTitle] = useState('');
    const [openingText , setOpeningText] = useState('');
    const [date , setDate] = useState('');
    const titleChangeHandler = (e )=> setTitle(e.target.value);
    const dateChangeHandler = (e )=> setDate(e.target.value);
    const openingTextChangeHandler = (e )=> setOpeningText(e.target.value);
    const submitHandler  = (e) =>{
        e.preventDefault();
        const movieDetails={
            title:title,
            openingText :openingText,
            date:date
        }
        props.onAddingMovie(movieDetails);  
    }
    return (
        <section>
            <form onSubmit={submitHandler} className="my-form">
                <label htmlFor="title">Title</label><br></br>
                <input type="text" value={title} onChange={titleChangeHandler} name="title" id="title"></input>
                <br/>
                <label htmlFor="opening">Opening Text</label><br/>
                <textarea id="opening" value={openingText} onChange={openingTextChangeHandler} name="opening"></textarea>
                <label htmlFor="date">Release Date</label><br/>
                <input type="date" name="date" id="date" value={date} onChange={dateChangeHandler}></input>
                <Button type="submit">Add Movie</Button>
            </form>
        </section>
    )
}
export default AddMovie;