import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroParallaxDemo } from "./components/heropreview";
import {AboutMe} from './components/aboutme';
import Coding from './components/coding';
import Projects from './components/projects';
import Contact from './components/contact';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<HeroParallaxDemo />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/coding" element={<Coding/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
