import { useState } from 'react';
import Activity from "../Activity";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [activities] = useState([
    {
      name: 'blog-vista',
      description: 'CMS-style-blog',
      link: "https://blog-vista-dmdu.onrender.com",
      repo: "https://github.com/Ifylee/blog_vista"
    },
    {
      name: 'weather-channel',
      description: 'Server-side-APIs',  
      link: "https://ifylee.github.io/weather-channel/",
      repo: "https://github.com/Ifylee/weather-channel"
    },
    {
      name: 'list-it',
      description: 'MERN-stack',
      link: "https://list-it-kw5e.onrender.com/",
      repo: "https://github.com/Ifylee/List-It"
    },
    {
      name: 'dream-voyage',
      description: 'MERN-stack',
      link: "https://dream-voyage.onrender.com/",
      repo: "https://github.com/Ifylee/Dream-Voyage"
    },
    {
      name: 'code-refactor',
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

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
