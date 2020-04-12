import React from 'react';
import Projects from './Projects';
import book_a_session_frontend from '../img/book_a_session.png';
import book_a_session_backend from '../img/book_a_session_backend.png';


function ProjectList() {
  const list = {
    projects: [
      {
        title: "Book a Session Frontend",
        githubLink: "https://github.com/DanielMitiku/book-a-counseling-session-frontend",
        liveLink: "",
        image: book_a_session_frontend,
      },
      {
        title: "Book a Session Backend",
        githubLink: "https://github.com/DanielMitiku/book-a-counseling-session-backend",
        liveLink: "",
        image: book_a_session_backend,
      },
    ],
  }

  return (
    <div>
      <h2 className="my-4">Here are some of my Projects</h2>
      <i className="fas fa-arrow-down fa-4x mb-4"></i>
      <Projects list={list}/>
    </div>
  );
}

export default ProjectList;
