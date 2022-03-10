import Home from './pages/Home'
import Experience from './pages/Experience'
import Layout from './pages/Layout'
import Project from './pages/Project';
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home/> } />
            <Route path="experience/" element={ <Experience/> } />
            <Route path="project/" element={ <Project/> } />
          </Route>
        </Routes>
      </Router>
  );
}

export default App