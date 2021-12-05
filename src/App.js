import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="font-thin">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
