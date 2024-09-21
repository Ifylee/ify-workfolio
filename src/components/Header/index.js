import React from 'react';

import "./style.css";

function Header(props) {
    return (
        <header className="header-container">
        <h1>Ify</h1>
        <img src="https://images.unsplash.com/photo-1720778693818-ab47a7fc6df4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        {props.children}
        </header>
    );
}

export default Header;