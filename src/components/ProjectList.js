import React from 'react';
import Projects from './Projects';
import book_a_session_frontend from '../img/book_a_session.png';
import book_a_session_backend from '../img/book_a_session_backend.png';
import rails_book from '../img/rails_book.png';
import weather_app from '../img/weather_app.png';
import battleship from '../img/battleship.png';


function ProjectList() {
  const list = {
    projects: [
      {
        title: 'Book a Session Frontend',
        githubLink: 'https://github.com/DanielMitiku/book-a-counseling-session-frontend',
        liveLink: 'https://book-a-session-rails-react.herokuapp.com/',
        image: book_a_session_frontend,
        header: 'A web app that lets you book a session with experts',
        description: 'React | Redux | JWT',
      },
      {
        title: 'Book a Session Backend',
        githubLink: 'https://github.com/DanielMitiku/book-a-counseling-session-backend',
        liveLink: 'https://book-a-session-rails-react.herokuapp.com/',
        image: book_a_session_backend,
        header: 'API only rails backend that uses RESTful API and JWT',
        description: 'Ruby | RailsAPI | JWT',
      },
      {
        title: 'Rails Social Media Clone',
        githubLink: 'https://github.com/DanielMitiku/Final-Project',
        liveLink: 'https://serene-shore-00148.herokuapp.com/',
        image: rails_book,
        header: 'Rails Project on a facebook like social media',
        description: 'Omniauth | Rails | Postgres | Devise',
      },
      {
        title: 'Weather App',
        githubLink: 'https://github.com/DanielMitiku/weather-app',
        liveLink: 'https://danielmitiku.github.io/weather-app',
        image: weather_app,
        header: 'Fetch real-time weather info using Open Weather Map API and display gifs using Giphy API',
        description: 'Webpack | JavaScript | HTML | CSS',
      },
      {
        title: 'Battleship Game',
        githubLink: 'https://github.com/DanielMitiku/battleship',
        liveLink: 'https://rawcdn.githack.com/DanielMitiku/battleship/126ea723ff76f7db65f0803178434633c6c7bf3c/dist/index.html',
        image: battleship,
        header: 'Classic Battleship game played by a human player against the computer',
        description: 'Webpack | JavaScript | Jest',
      },
    ],
  };

  return (
    <div>
      <h2 className="my-4">Here are some of my Projects</h2>
      <i className="fas fa-arrow-down fa-3x mb-4" />
      <Projects list={list} />
    </div>
  );
}

export default ProjectList;
