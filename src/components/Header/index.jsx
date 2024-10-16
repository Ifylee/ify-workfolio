import React from 'react';
// Importing an image to be used as the cover picture in the header
import coverPix from '../../asset/images/coverPix.jpg';

// Defining the Header component that accepts props to render child elements
function Header(props) {
    // Returning JSX structure for the header with a title, cover picture, and child elements
    return (
        <header className="flex-row space-between px-1">
        <h1>Ify-Workfolio</h1>
        <img src={coverPix} alt="picture of a serene landscape of flowers and trees with a resting bench by the side of the walkway"></img>
        {props.children}
        </header>
    );
}

// Exporting the Header component
export default Header;
