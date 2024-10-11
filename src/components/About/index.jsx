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
          My name is Ifeyinwa Constance Ekezie, and I am an aspiring web developer with a passion for creating efficient and user-friendly web applications. With a solid grounding in front-end technologies like HTML, CSS, JavaScript, and jQuery, combined with back-end skills in Node.js, I enjoy building solutions that bridge the gap between functionality and design.</p>
          <p>
          Currently, I am advancing my web development knowledge through the UC Berkeley Extension’s Full Stack Web Development program, where I am honing my skills in full-stack development. Prior to this, I completed a range of courses with Codecademy, which helped me build a strong foundation in coding and problem-solving.
          In my previous roles as a Shipping Supervisor and Customer Service & Marketing Manager, I developed leadership, communication, and problem-solving skills that I now bring into my technical projects. These roles sharpened my ability to work under pressure, manage complex operations, and deliver results—all qualities I believe are crucial in web development.</p>
          <p>
          I am excited to transition into a career where I can combine my technical knowledge with my passion for innovation and continuous learning. My goal is to contribute to a forward-thinking team where I can grow as a developer while making a meaningful impact.</p>
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;

