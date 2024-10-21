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
          I am Ifeyinwa Constance Ekezie, a dedicated web developer with a passion for creating efficient, user-centric web applications. My expertise spans front-end technologies like HTML, CSS, JavaScript, and jQuery, alongside back-end development with Node.js, allowing me to build solutions that balance aesthetics with functionality.</p>
          <p>
          During a career break to welcome my first child, I found a new passion for coding, using the time to complete several courses with Codecademy that solidified my foundation in programming. This journey led me to earn my Full Stack Web Development certificate from UC Berkeley Extension, where I deepened my skills in full-stack development and problem-solving.
          My background in French Language from the University of Calabar, Nigeria, has enriched my communication skills, while my previous roles as a Shipping Supervisor and Customer Service & Marketing Manager sharpened my leadership, strategic thinking, and ability to thrive under pressure. These experiences have given me a unique perspective that I now bring to my technical work.</p>
          <p>
          With my skills and determination, I am excited to re-enter the job market and make an impact as part of an innovative team. I am eager to contribute to dynamic projects, continue learning, and grow as a developer, all while delivering value through thoughtful and effective web solutions.</p>
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;

