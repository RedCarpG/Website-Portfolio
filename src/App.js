import React from 'react';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Layout from './pages/Layout'
import Project from './pages/Project';
import {
  HashRouter ,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home/> } />
            <Route path="experience" element={ <Experience/> } />
            <Route path="project" element={ <Project/> } />
          </Route>
        </Routes>
      </HashRouter>
  );
}