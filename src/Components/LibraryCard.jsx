import { useMemo, useState } from "react";
import { createPortal } from "react-dom";

import projects from "./Data/Projects.json";
import Project from "./Project/Project";

import ProjectFilters from "./ProjectFilters";
import FilteredProjects from "./FilteredProjects";

import "./LibraryCardStyle.css"

import { filterProjects } from "./Utils/FilterProject";

function LibraryCard() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSoftware, setSelectedSoftware] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const languages = useMemo(() => {
    return [
      ...new Set(
        projects.flatMap((project) => project.languages)
      ),
    ].sort();
  }, []);

  const software = useMemo(() => {
    return [
      ...new Set(
        projects.flatMap((project) => project.software)
      ),
    ].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return filterProjects(
      projects,
      selectedLanguages,
      selectedSoftware
    );
  }, [selectedLanguages, selectedSoftware]);

  function resetFilters() {
    setSelectedLanguages([]);
    setSelectedSoftware([]);
  }

  return (
    <>
      <div className="card">
      <div className="filters">
        <ProjectFilters
          languages={languages}
          software={software}
          selectedLanguages={selectedLanguages}
          selectedSoftware={selectedSoftware}
          setSelectedLanguages={setSelectedLanguages}
          setSelectedSoftware={setSelectedSoftware}
          onReset={resetFilters}/>
         </div>
      <div className="projects">
        <FilteredProjects
          projects={filteredProjects}
          onProjectClick={setSelectedProject}
        />
      </div>
     
      
       
      </div>
       {selectedProject &&
        createPortal(
          <Project
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />,
          document.body
        )}
</>
      
   
  );
}

export default LibraryCard;
