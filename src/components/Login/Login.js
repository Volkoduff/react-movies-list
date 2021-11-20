import React from "react";
import Card from "../UI/Card/Card";

const Login = (props) => {
    return <Card>
        <form>
            <label htmlFor="auth-login">Login</label>
            <input type="text" id="auth-login"/>
            <label htmlFor="auth-password">Password</label>
            <input type="password" id="auth-password"/>
            <button onClick={props.onLogin}>Log in</button>
        </form>
    </Card>
};

export default Login;
