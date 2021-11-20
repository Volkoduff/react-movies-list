import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    return <header className={classes['header-logo__wrap']}>
        <div className={classes['header-logo']}>WishList</div>
    </header>
};

export default Header;
