import React from "react";
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.control}>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={props.isValid ? '' : classes['control-invalid']} />
        </div>
    )
};

export default Input;
