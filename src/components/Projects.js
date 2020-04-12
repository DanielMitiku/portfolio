import React from 'react';


function Projects({list}) {
  return (
    <div>
      <div className="col-10 offset-1">
        { list.projects.map(project => {
          return (
            <div key={project.title} className="">
              <h3 className="mb-4">{project.title}</h3>
              <img className="img-fluid" src={project.image} alt={project.title} />
              <div className="row my-3">
                <div className="col-md-6 source-code">
                  <a target="_blank" rel="noopener noreferrer" href={project.githubLink} className="my-1 btn btn-outline-dark" role="button" aria-pressed="true"><i className="fas fa-code "></i> Source Code</a>
                </div>
                <div className="col-md-6 live-link">
                  <a target="_blank" rel="noopener noreferrer" href={project.liveLink} className="my-1 btn btn-outline-dark" role="button" aria-pressed="true"><i className="fas fa-cloud"></i> Live Demo</a>
                </div>
              </div>
              </div>
          );
        }
        )}
      </div>
    </div>
  );
}

export default Projects;
