import React from 'react'

export default function ProjectSummry({ project},...props) {
    
    return (
        <div className="card z-depth-1 project-summry">
            <div className="card-content gray text darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <p className="gray-text">
                    3rd separate 2021
                </p>
            </div>
        </div>
    )
}
