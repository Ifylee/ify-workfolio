// Importing useState from React and Activity component for displaying portfolio items
import { useState } from 'react';
import Activity from "../Activity";

function Portfolio() {

  
  const [activities] = useState([
  // Using useState to manage the list of activities/projects for the portfolio
  // Each activity contains a name, description, link to the live project, and GitHub repository link
    {
      name: 'blogVista',
      description: 'CMS-style-blog',
      link: "https://blog-vista-dmdu.onrender.com/",
      repo: "https://github.com/Ifylee/blog_vista"
    },
    {
      name: 'weatherChannel',
      description: 'Server-side-APIs',  
      link: "https://ifylee.github.io/weather-channel/",
      repo: "https://github.com/Ifylee/weather-channel"
    },
    {
      name: 'listIt',
      description: 'MERN-stack',
      link: "https://list-it-z3t7.onrender.com",
      repo: "https://github.com/Ifylee/List-It"
    },
    {
      name: 'dreamVoyage',
      description: 'MERN-stack',
      link: "https://dream-voyage.onrender.com/",
      repo: "https://github.com/Ifylee/Dream-Voyage"
    },
    {
      name: 'codeRefactor',
      description: 'HTML/CSS',
      link: "https://ifylee.github.io/business-marketing-strategies/",
      repo: "https://github.com/Ifylee/business-marketing-strategies"
    },
     {
      name: 'graphbooks',
      description: 'MERN-stack',
      link: "https://graphbooks.onrender.com",
      repo: "https://github.com/Ifylee/graphBooks"
    },
  ]);

  // Rendering a list of activities by mapping over the activities state array
  // Each Activity component receives an activity object as a prop and a unique key
  return (
    <div>
      <div className="flex-row">
        {activities.map((activity, idx) => (
          <Activity
            activity={activity}
            key={"activity" + idx}
          />
        ))}
      </div>
    </div>
  );
};

// Exporting the Portfolio component
export default Portfolio;
