import React from 'react'
import ProjectSummry from './ProjectSummry'

export default function ProjectList({ projects},...props) {
    const projectsArray = projects.projects;
    return (
        <div className="section project-list">
            
            {projectsArray && projectsArray.map((project,i)=>{
                return <ProjectSummry key={i} project={project}/>
            })}
            

        

        </div>
    )
}
