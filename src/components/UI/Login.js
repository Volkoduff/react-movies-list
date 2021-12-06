import React, {useState, useContext} from "react";
import AuthContext from "../context/auth-context";
import Input from "./Input/Input";
import Card from "./Card/Card";

const Login = (props) => {
    const ctx = useContext(AuthContext);
    const [nameIsValid, setNameIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);



    return(
        <Card>
            <form onSubmit={props.loginHandler}>
                <Input
                    id='name'
                    type='text'
                    label='Login'
                    isValid={nameIsValid}
                    // onChange={onChangeTitleHandler}
                />
                <Input
                    id='password'
                    type='text'
                    label='Password'
                    isValid={passwordIsValid}
                    // onChange={onChangeTextHandler}
                />
                <button type="button" onClick={ctx.onLogin}>LogIn</button>
            </form>
        </Card>
    )
};

export default Login;
