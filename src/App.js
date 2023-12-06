import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';

import NavigationBar from './components/navigation/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route index element={<HomePage />} />
          {/*
          <Route path="add" element={<AddTools />} />
          <Route path="updatePage" element={<UpdatePage />} />
          <Route path="update">
            <Route path=":toolId" element={<UpdateTool />} />
          </Route>
          <Route path="delete" element={<DeleteTool />} />
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;