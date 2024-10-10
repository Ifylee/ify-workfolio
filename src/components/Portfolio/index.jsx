import { useState } from 'react';
import Activity from "../Activity";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [activities] = useState([
    {
      name: 'blog_vista',
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
      name: 'List-It',
      description: 'MERN-stack',
      link: "https://list-it-kw5e.onrender.com/",
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

export default Portfolio;
