import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'bookSearchEngine',
      description: 'MERN',
      link: "https://book-search-engine-p7l0.onrender.com/",
      repo: "https://github.com/jakesmitty05/book-search-engine"
    },
    {
      name: 'textEditorPWA',
      description: 'PWA',
      link: "https://text-editor-pwa-27vb.onrender.com/",
      repo: "https://github.com/jakesmitty05/text-editor-PWA"
    },
    {
      name: 'techBlog',
      description: 'MYSQL/Sequelize',
      link: "https://tech-blog-app-js-8c0ad948360a.herokuapp.com/",
      repo: "https://github.com/jakesmitty05/tech-blog-app"
    },
    {
      name: 'noteTaker',
      description: 'Express/JavaScript/CSS',
      link: "https://note-taker-app-js-a62d5ffa562d.herokuapp.com/",
      repo: "https://github.com/jakesmitty05/note-taker-app"
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
}

export default Portfolio;
