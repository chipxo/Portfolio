import projectsList from "./projectsList";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="bg-transparentshadow-none border-none">
      <div className="container grid gap-y-4 lg:gap-y-10">
        <h2 className="mx-auto w-fit text-2xl font-semibold lg:text-3xl">
          My projects
        </h2>
        <div className="grid gap-4 overflow-hidden lg:grid-cols-2 lg:gap-8">
          {projectsList.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
