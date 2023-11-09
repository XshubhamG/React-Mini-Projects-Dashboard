import mainImg from "../images/Main.svg";
const ProjectHeader = () => {
  return (
    <section className="project-header">
      <div>
        <h1>React Mini Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis
          officia deleniti rerum vel molestiae ea quibusdam architecto dolorem
          adipisci.
        </p>
        <a href="#projects" className="btn">
          Show Projects
        </a>
      </div>
      <picture>
        <img src={mainImg} />
      </picture>
    </section>
  );
};

export default ProjectHeader;
