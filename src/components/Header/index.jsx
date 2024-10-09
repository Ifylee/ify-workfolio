import React from 'react';

import "./style.css";

function Header(props) {
    return (
        <header className="header-container">
        <h1>Welcome to my Portfolio</h1>
        <img src="https://plus.unsplash.com/premium_photo-1667587245819-2bea7a93e7a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRmb2xpbyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="background"/>
        {props.children}
        </header>
    );
}

export default Header;