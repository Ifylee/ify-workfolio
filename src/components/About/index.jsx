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
          I’m a full-stack web developer who took a rather new path into the world of code. My journey began after a career detour as a shipping supervisor, where I mastered the fine art of logistics, managing tight schedules, and keeping my cool amidst endless stacks of boxes. Somewhere between the tracking numbers and packing tape, I realized I craved a bit more creativity and challenge. My passion for coding came alive during my career break — a break that, admittedly, started as an attempt to squeeze in some extra sleep but ended up sparking a whole new passion!</p>
          <p>
          I dove headfirst into programming, first through Codecademy, then solidified my skills at UC Berkeley, where I picked up modern tech essentials like JavaScript, React, Node.js, and databases. I quickly found that coding is a lot like solving puzzles (with the occasional urge to throw the puzzle out the window), and I loved it! Now, I’m all about creating responsive, user-friendly applications with just the right mix of creativity and logic. Every project I tackle gets the same level of attention, quality, and a good dose of humor because, hey, coding without fun is just typing.</p>
         <p>
         Outside of the digital realm, I’m a full-time mom, trying to keep up with my toddler while balancing the demands of a tech career. When I’m not coding or parenting, I’m usually learning something new, working on side projects, or finding creative ways to balance family life with tech.</p>
          <p>
          Driven by curiosity and a love for making things work (and look cool while doing it), I’m excited to bring fresh ideas and plenty of laughs to my next project. Let’s build something amazing — or, at the very least, something that won’t crash!</p>
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;

  

 
  
  
  