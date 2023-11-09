import projects from "../data/data";

const CardContainer = () => {
  return (
    <div className="card-container">
      {projects.map((e) => {
        return (
          <div key={e.id} className="card">
            <a href={e.url} target="_blank">
              <img src={e.img} alt={e.title} />
              <h3>{e.title}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
