import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"
import Card from "../Card/Card";
import AddMovie from "../../AddMovie";

const BackDrop = (props) => {
    return <div onClick={props.onCancelModal} className={classes.backdrop}/>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <Card>
                <header><h2>{props.title}</h2></header>
                <AddMovie onAddMovie={props.onAddMovie}/>
                <footer>
                    <button onClick={props.onCancelModal}>Cancel</button>
                </footer>
            </Card>
        </div>
    )
};

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onCancelModal={props.onCancelModal}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onAddMovie={props.onAddMovie} onCancelModal={props.onCancelModal}/>, document.getElementById('modal-root'))}
        </React.Fragment>
    )
};

export default Modal;
