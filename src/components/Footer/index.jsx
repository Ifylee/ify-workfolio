import React from "react";


function Footer() {
    const icons = [
        {
            name: "fab fa-github", 
            links: "https://github.com/Ifylee"
        },
        {
            name: "fab fa-linkedin", 
            links: "https://www.linkedin.com/in/ifeyinwa-ekezie-565a6b154/"
        }
    ];

    const LinkStyle = {
        textDecoration: "none",
        color: "white",
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
            <section style={{display: "grid", gridTemplateColumns: "max-content 1fr 1fr", gridGap: "20px"}}>
                <span style={{paddingRight: "15px"}}>© {new Date().getFullYear()}</span>
                {icons.map(icon => {
                    return (
                        <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}>
                            <i className={icon.name}></i>
                        </a>
                    );
                })}
            </section>
        </footer>
    );
}

export default Footer;
