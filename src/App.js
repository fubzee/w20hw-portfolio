import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import './styles/App.css';
import Landing from './components/main'
import Contacts from './components/contacts';
import About from './components/aboutme';
import Projects from './components/projects';

function App() {
  return (
  <Router>
          <div>
          <Routes>
              <Route 
              path="/w20hw-portfolio/" 
              element={< Landing/>} 
              />
              <Route 
              path="/w20hw-portfolio/aboutme" 
              element={< About/>} 
              />
              <Route 
              path="/w20hw-portfolio/projects" 
              element={ <Projects />} 
              />
              <Route 
              path="/w20hw-portfolio/contacts" 
              element={< Contacts />} 
              />
          </Routes>  
      </div>
    </Router>
  );
}
export default App;