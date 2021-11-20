import React from "react";
import classes from "./Error.module.css"

const Error = (props) => {
    return (
        <div  className={classes['error-wrap']}>
            <h5 className={classes['error-wrap__title']}>{props.title}</h5>
            <p className={classes['error-wrap__message']}>{props.message}</p>
        </div>
    )
};

export default Error;
