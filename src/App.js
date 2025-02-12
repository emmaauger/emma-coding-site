import "./App.css";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <h1>Explore the Brain of Emma Auger Hirner</h1>
      </header>
      <footer className="App-footer">
        All code for this project can be found @
        <a
          className="App-link"
          href="https://github.com/emmaauger"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  );
}

export default App;
