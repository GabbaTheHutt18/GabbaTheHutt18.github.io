import React, { useEffect } from "react";
import "./Project.css";
import "../Modal.css";

export default function Project({ project, onClose }) {
    useEffect(() => {
        document.body.classList.add("active-modal");

        return () => {
            document.body.classList.remove("active-modal");
        };
    }, []);

    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}></div>

            <div className="modal-content project-modal-content">
                <div className="page1">
                    <h2>{project.name}</h2>
                    <iframe src={project.url} title={project.title}  allow="fullscreen"></iframe>
                </div>
                
                <div className="page2">
                    <button className="closeModel" onClick={onClose}>
                        CLOSE
                    </button>
                <p>
    
                    <strong>Languages:</strong>{" "}
                    {project.languages.join(", ")}
                    
                </p>

                <p>
                    <strong>Software:</strong>{" "}
                    {project.software.join(", ")}
                </p>
                
                <p>
                    <strong>Time:</strong>{" "}
                    {project.TimeAmount} {project["Time unit"]}
                </p>

                <p>
                    <strong>Year:</strong> {project.Year}
                </p>

                <p>
                    <strong>Project Type:</strong>{" "}
                    {project.ProjectType}
                </p>

                {project.FirstLine}

                <ul>
                    {project.Bulletpoints.map((element, index) => (<li key={index}>{element}</li>))}
                </ul>
                </div>
               
            </div>
        </div>
    );
}