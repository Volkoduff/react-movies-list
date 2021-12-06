import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
import classes from "./Header.module.css"

const Header = () => {
    const ctx = useContext(AuthContext);
    return (
        (<header className={classes['header-logo__wrap']}>
            <div className={classes['header-logo']}>WishList</div>
            {ctx.isLoggedIn && <button onClick={ctx.onLogout}>Log out</button>}
        </header>)
    )
};

export default Header;
