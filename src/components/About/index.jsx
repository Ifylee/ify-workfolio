// This function defines the About component, which is a functional component in React.
function About() {
    return (
      // The section element with a class of 'my-5' is used to structure the content.
      <section className="my-5">
        <div className="my-2">
          {/* Profile image section with a margin class for spacing */}
          <div className="profile-img my-5">
            <img
              src="/profilePix.jpg" 
              alt="Ifeyinwa Ekezie"
              style={{ width: "150px", borderRadius: "50%" }}
            />
          </div>
          <p>
          I caught fire coding.

          As a first-generation immigrant in the United States, I thrived as a shipping supervisor, finding satisfaction in organization and problem-solving. But somewhere between the tracking numbers and packing tape, I realized I wanted more. I yearned for creativity and growth. </p>
          <p>
          During my career break as a first-time mom—a break I initially saw as a chance to catch up on sleep—I discovered my passion for coding through a Codecademy HTML tutorial. That spark ignited something deeper, and I soon pursued Berkeley Coding Boot Camp to solidify my skills.</p>
         <p>
         Coding combines my love for puzzles, problem-solving, and creativity. It’s a field where breaking things (in a separate Git branch, of course) can lead to better solutions. Watching a web page seamlessly adapt to mobile screens is as satisfying as solving a complex puzzle.</p>
          <p>
          I’m moldable, like the web pages I design, yet I keep my creative spark intact. My specialties include responsive design, domain-driven development, website optimization, and MVC architecture. I’m proficient in HTML, CSS, jQuery, JavaScript, React, APIs, Node.js, Express, PostgreSQL, Sequelize, MongoDB, REST, GraphQL, and Git/GitHub, and am always eager to learn new technologies and frameworks.</p>
          <p>
          I’m ready to bring my passion and skills to a team that values creativity, collaboration, and a love for solving puzzles—just like me.
          </p>
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;

  

 
 







  