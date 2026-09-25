function ProjectCard({ project, onClick }) {
  return (
    <div style={{cursor:"pointer"}}>
      <article
        className="projects"
        onClick={() => {
          console.log("Clicked:", project);
          onClick(project);
        }}
      >
        <h3> •{project.name}</h3>

       
      </article>
    </div>
  );
}

export default ProjectCard;
