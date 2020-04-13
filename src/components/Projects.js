import React from 'react';


function Projects({ list }) {
  return (
    <div>
      <div className="col-sm-10 offset-sm-1 col-12">
        { list.projects.map(project => (
          <div key={project.title} className="">
            <h3 className="mb-4">{project.title}</h3>
            <div className="card bg-dark text-white project-image-div">
              <img className="card-img project-image" src={project.image} alt={project.title} />
              <div className="card-img-overlay project-image-texts">
                <h5 className="card-title project-image-text">{project.header}</h5>
                <h5 className="card-title project-image-text">{project.description}</h5>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 source-code">
                <a target="_blank" rel="noopener noreferrer" href={project.githubLink} className="my-1 btn btn-outline-dark" role="button" aria-pressed="true">
                  <i className="fas fa-code" />
                  {' '}
                  Source Code
                </a>
              </div>
              <div className="col-md-6 live-link">
                <a target="_blank" rel="noopener noreferrer" href={project.liveLink} className="my-1 btn btn-outline-dark" role="button" aria-pressed="true">
                  <i className="fas fa-cloud" />
                  {' '}
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
