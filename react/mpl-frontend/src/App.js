import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import CarouselComponent from "./Components/Body/Carousel/CarouselComponent";
import Experiencia from "./Components/Body/Experiencia/Experiencia";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <body>
        <CarouselComponent />
        <Experiencia />
      </body>
    </div>
  );
}

export default App;
