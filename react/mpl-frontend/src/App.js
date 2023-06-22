import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Carrousel from "./Components/Body/Carrousel/Carrousel";
import Experiencia from "./Components/Body/Experiencia/Experiencia";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Carrousel />
        <Experiencia />
      </body>
    </div>
  );
}

export default App;
