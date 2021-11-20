import React, {useEffect, useRef, useState} from 'react';
import classes from './AddMovie.module.css';

function AddMovie(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [titleIsValid, setTitleIsValid] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [textIsValid, setTextIsValid] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);

    const releaseDateRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        const movie = {
            title: enteredTitle.value,
            openingText: enteredText.value,
            releaseDate: releaseDateRef.current.value,
        };
        props.onAddMovie(movie);
    };

    useEffect(() => {
        console.log('EFFECT RUNNING');
        const timer = setTimeout(() => {
            setFormIsValid(titleIsValid && textIsValid);
        }, 1500);

        return () => {
            console.log('EFFECT CLEANUP');
            clearTimeout(timer)
        }
    }, [titleIsValid, textIsValid]);

    const onChangeTitleHandler = (evt) => {
        if (evt.currentTarget.value === ' ') {
            evt.currentTarget.value = '';
        }
        setTitleIsValid(evt.currentTarget.value.trim().length > 0)
    };

    const onChangeTextHandler = (evt) => {
        if (evt.currentTarget.value === ' ') {
            evt.currentTarget.value = '';
        }
        setTextIsValid(evt.currentTarget.value.trim().length > 5)
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' className={titleIsValid ? '' : classes['control-invalid']} onChange={onChangeTitleHandler} />
            </div>
            <div className={classes.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <input id='opening-text' onChange={onChangeTextHandler} className={textIsValid ? '' : classes['control-invalid']} />
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date'  ref={releaseDateRef}/>
            </div>
            <button type="button" disabled={!formIsValid}>Add Movie</button>
        </form>
    );
}

export default AddMovie;
