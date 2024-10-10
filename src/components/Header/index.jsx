import React from 'react';

import coverPix from '../../asset/images/coverPix.jpg';

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
        <h1>Ify-Workfolio</h1>
        <img src={coverPix} alt="picture of a serene landscape of flowers and trees with a resting bench by the side of the walkway"></img>
        {props.children}
        </header>
    );
}

export default Header;
