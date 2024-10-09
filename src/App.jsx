import React, { useState } from 'react';
import Footer from './components/Footer';   
import Header from './components/Header';
import Nav from './components/Nav';


// components

function App() {
    const  [pages] = useState([
        {
            name: "Home", 
            description: "Home Page"
        },
        {
            name: "About",
            description: "About Page"
        },
        {
            name: "Portfolio", 
            description: "Portfolio Page"
        },
        {
            name: "Resume", 
            description: "Resume Page"
        },
        {
            name: "Contact", 
            description: "Contact Page"
        },
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);



    return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
    
}

export default App; 