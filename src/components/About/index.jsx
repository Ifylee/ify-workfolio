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
          My name is Ifeyinwa Constance Ekezie, and I am a passionate web developer with a passion for creating efficient and user-friendly web applications. With a solid foundation in front-end technologies like HTML, CSS, JavaScript, and jQuery, as well as back-end skills in Node.js, I enjoy building solutions that bridge the gap between functionality and design.</p>
          <p>
          During my career break to welcome my first child, I discovered a passion for coding, leading me to complete several courses with Codecademy that strengthened my programming foundation.   This exploration ultimately led to my recent graduation from UC Berkeley Extension, where I earned a Full Stack Web Development certificate and honed my full-stack development skills.</p>
         <p>
         My B.A Hons in French has equipped me with exceptional inter-personal and communication skills. In addition, my previous roles as a Shipping Supervisor and Customer Service & Marketing Manager sharpened my leadership abilities, strategic thinking, and capacity to thrive under pressure. These diverse experiences provide me with a unique perspective that I bring to my technical work.</p>
          <p>
          With my skills and determination, I am excited to make an impact as part of an innovative team. I am eager to contribute to dynamic projects, continue learning, and grow as a developer, all while delivering value through thoughtful and effective web solutions.</p>
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;

