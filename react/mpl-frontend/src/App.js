import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Carrousel from "../src/Components/Carrousel/Carrousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Carrousel />
      </body>
    </div>
  );
}

export default App;
