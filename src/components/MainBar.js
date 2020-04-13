import React from 'react';
import ProjectList from './ProjectList';
import ContactForm from './ContactForm';
import About from './About';


function MainBar() {
  return (
    <div>
      <ProjectList />
      <About />
      <ContactForm />
    </div>
  );
}

export default MainBar;
