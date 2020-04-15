import React from 'react';
import ParticlesBg from 'particles-bg';
import daniel_wesego_img from '../img/daniel.jpg';


function SideBar() {
  return (
    <>
      <div className="sideDiv my-2">
        <h3>Hi, I am </h3>
        <h1>Daniel Wesego</h1>
        <div className="text-center">
          <img src={daniel_wesego_img} className="img-fluid col-md-8 col-6 my-3 offset-md-2 offset-3 mx-auto d-block rounded-circle" alt="Daniel Wesego" />
          <h3 className="mt-4">Full Stack Developer</h3>
          <p>Ruby on Rails | React | Redux</p>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="mailto: wedanielmitiku@gmail.com"><i className="fas fa-envelope fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielMitiku"><i className="fab fa-github fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-wesego/"><i className="fab fa-linkedin fa-2x mx-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/daniel_wesego"><i className="fab fa-twitter fa-2x mx-2" /></a>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1d46IP5Kq7RWbZfRiP0zFAHu3aTy0n1oZ/view?usp=sharing" className="my-2 btn btn-outline-dark" role="button" aria-pressed="true">Resume</a>
        </div>
      </div>
      <ParticlesBg type="cobweb" bg />
    </>
  );
}

export default SideBar;
