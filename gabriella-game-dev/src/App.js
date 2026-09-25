
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Home} from './Pages/Home';
import {NavPage} from './Pages/NavPage';
import {Library} from './Pages/Library';
import {AboutMe} from './Pages/AboutMe';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Greetings" element={<NavPage/>}/>
          <Route path="/Projects" element={<Library/>}/>
          <Route path="/AboutMe" element={<AboutMe/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;