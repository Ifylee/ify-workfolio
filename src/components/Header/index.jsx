import React from 'react';

import "./style.css";

function Header(props) {
    return (
        <header className="header-container">
        <h1>Ify-Workfolio</h1>
        <img src="C:\Users\ifyek\OneDrive\Desktop\ify-workfolio\src\asset\images\coverImage.png"/>
        {props.children}
        </header>
    );
}

export default Header;
