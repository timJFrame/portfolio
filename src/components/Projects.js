import React from 'react' 


import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects(){

    



    return( 
        <div className="modal-container-div">
           
           {projects.map(project => (
               <ProjectCard key={project.id} {...project}/>
           ))}
           
           
        </div>
    )
}

export default Projects