import projectsList from "./projectsList";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-none bg-transparent pt-0 shadow-none"
    >
      <div className="container grid gap-y-4 lg:gap-y-10">
        <h2 className="mx-auto w-fit text-2xl font-semibold lg:text-3xl">
          My projects
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {projectsList.map((project, i) => (
            <ProjectItem key={project.id} {...project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
