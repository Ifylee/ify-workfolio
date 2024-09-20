import React from "react";  


function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "https//github.com"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https//linkedin.com"
        }
    ];


    const LinkStyle = {
        textDecoration: "none",
        color: "black",
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "50px",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridGap: "15px"
    }

    return (
        <footer style={FooterStyle}>
            <section>
               {/* {new Date.getYear()}  */}
            </section>
            <section>
            {icons.map((icon => {
                return (
                    <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}> <i className={icon.name}></i> </a>
            )}))}
            </section>
        </footer>
    );  
}

export default Footer;  