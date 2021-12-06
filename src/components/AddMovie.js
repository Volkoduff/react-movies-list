import React, {useEffect, useRef, useState} from 'react';
import Input from "./UI/Input/Input";

function AddMovie(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [titleIsValid, setTitleIsValid] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [textIsValid, setTextIsValid] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);

    const releaseDateRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            const movie = {
                title: enteredTitle.value,
                openingText: enteredText.value,
                releaseDate: releaseDateRef.current.value,
            };
            props.onAddMovie(movie);
        }
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
            <Input
                id='title'
                type='text'
                label='Title'
                isValid={titleIsValid}
                onChange={onChangeTitleHandler}/>
            <Input
                id='opening-text'
                type='text'
                label='Opening Text'
                isValid={textIsValid}
                onChange={onChangeTextHandler}/>
            <Input
                id='date'
                type='date'
                label='Release Date'
                isValid={textIsValid}
                onChange={onChangeTextHandler}/>
            <button type="button" onClick={props.onAddMovie}>Add Movie</button>
        </form>
    );
}

export default AddMovie;
