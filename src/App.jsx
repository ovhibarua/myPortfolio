import "./App.css";
import Aside from "./components/Aside";
import Container from "./components/Container";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Aside />
      <Container />
    </div>
  );
}

export default App;
