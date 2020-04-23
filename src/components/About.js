import React from 'react';


function About() {
  return (
    <div className="col-10 offset-1 my-5 text-left">
      <div>
        <h2> About Me</h2>
        <p>
          I am Daniel Wesego. I am a Full Stack Developer. I have experience in Ruby on Rails on the backend and React on the frontend. I love developing things. I am a passionate learner. If you want to know more about me, please see my
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1d46IP5Kq7RWbZfRiP0zFAHu3aTy0n1oZ/view?usp=sharing" role="button" aria-pressed="true"> Resume</a>
        </p>
      </div>
      <div className="my-5 text-left">
        <h3>Skills</h3>
        <ul>
          <strong>Languages:</strong>
          {' '}
          Ruby, Javascript (ES6), HTML, CSS, Python, PHP, Java
        </ul>
        <ul>
          <strong>Frameworks:</strong>
          {' '}
          Ruby on Rails, React, Redux, Bootstrap
        </ul>
        <ul>
          <strong>Database:</strong>
          {' '}
          MySQL, PostgreSQL
        </ul>
        <ul>
          <strong>Test:</strong>
          {' '}
          Jest, RSpec, Capybara
        </ul>
        <ul>
          <strong>Version Control:</strong>
          {' '}
          Git, Github
        </ul>
        <ul>
          <strong>Deployment:</strong>
          {' '}
          Heroku, Bare metal server environment setup, Shared hosting
        </ul>
      </div>
      <div className="my-5 text-left">
        <h3>Publications</h3>
        <h5 className="my-3">Here are some of the articles I wrote</h5>
        <li><a target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/building-a-simple-session-based-authentication-using-ruby-on-rails-9tah3y4j" role="button" aria-pressed="true">Building a simple session based authentication in Rails</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/building-tictactoe-using-vanilla-javascript-kt2b32mp" role="button" aria-pressed="true">Building TicTacToe using Vanilla JavaScript</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/news/how-to-add-javascript-to-your-rails-6-app" role="button" aria-pressed="true">Adding JavaScript to your rails 6 app</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://hackernoon.com/add-responsive-background-images-to-your-web-pages-a-how-to-guide-y8hc36q0" role="button" aria-pressed="true">Add Responsive Background Images to your Webpages</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://dev.to/danielmitiku/using-gitflow-in-your-development-54bd" role="button" aria-pressed="true">Using GitFlow in your development</a></li>
      </div>
    </div>
  );
}

export default About;
