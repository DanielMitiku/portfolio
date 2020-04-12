import React from 'react';
import daniel_wesego_img from '../img/daniel_wesego.jpg';


function SideBar() {

  return (
    <div className="sideDiv my-5">
      <h3>Hi, I am </h3>
      <h1>Daniel Wesego</h1>
      <div class="col-md-8 col-6 my-3 offset-md-2 offset-3 text-center">
        <img src={daniel_wesego_img} class="img-fluid mx-auto d-block rounded-circle" alt="Daniel Wesego"></img>
        <h3 class="mt-4">Full Stack Developer</h3>
        <p>Ruby on Rails | React | Redux</p>
      </div>
    </div>
  );
}

export default SideBar;
