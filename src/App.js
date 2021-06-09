import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/aboutme";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Navbar from "./pages/navbar";
import Projects from "./pages/projects";

function App() {
  
  return (
      <>
        <Router>
        <Navbar />
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
    </Router>
    </>
  );
}

export default App;