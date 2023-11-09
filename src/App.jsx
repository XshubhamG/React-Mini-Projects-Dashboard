import CardContainer from "./components/CardContainer";
import NavBar from "./components/NavBar";
import ProjectHeader from "./components/ProjectHeader";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ProjectHeader />
        <section>
          <h2 id="projects">Projects</h2>
          <CardContainer />
        </section>
      </main>
    </>
  );
}

export default App;
