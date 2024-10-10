import React from 'react';

import coverPix from '../../asset/images/coverPix.png';

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
        <h1>Ify-Workfolio</h1>
        <img src={coverPix} alt="image of an open laptop on a table"></img>
        {props.children}
        </header>
    );
}

export default Header;
