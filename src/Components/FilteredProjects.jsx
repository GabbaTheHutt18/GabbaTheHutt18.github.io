import ProjectCard from "./ProjectCard";

function FilteredProjects({ projects, onProjectClick }) {
  return (
    <div>
      <p className="project-count">
        {projects.length} projects
      </p>

      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard style={{cursor:"pointer"}} onClick={() => onProjectClick(project)}
            key={project.name}
            project={project}
          />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default FilteredProjects;
