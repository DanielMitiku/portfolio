import React from 'react';
import daniel_wesego_img from '../img/daniel.jpg';
import ParticlesBg from 'particles-bg'


function SideBar() {

  return (
    <>
      <div className="sideDiv my-5">
        <h3>Hi, I am </h3>
        <h1>Daniel Wesego</h1>
        <div className="col-md-8 col-6 my-3 offset-md-2 offset-3 text-center">
          <img src={daniel_wesego_img} className="img-fluid mx-auto d-block rounded-circle" alt="Daniel Wesego"></img>
          <h3 className="mt-4">Full Stack Developer</h3>
          <p>Ruby on Rails | React | Redux</p>
          <br />
          <a target="_blank" rel="noopener noreferrer" href="mailto: wedanielmitiku@gmail.com"><i className="fas fa-envelope fa-2x mx-2"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielMitiku"><i className="fab fa-github fa-2x mx-2"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-wesego/"><i className="fab fa-linkedin fa-2x mx-2"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/daniel_wesego"><i className="fab fa-twitter fa-2x mx-2"></i></a>
        </div>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
}

export default SideBar;
