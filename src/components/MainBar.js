import React from 'react';
import ProjectList from './ProjectList';
import ContactForm from './ContactForm';


function MainBar() {
  return (
    <div>
      <h1>Hello from MainBar</h1>
      <div>
        <ProjectList />
        <ContactForm />
      </div>
    </div>
  );
}

export default MainBar;
