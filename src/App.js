import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import GroupPage from './pages/groups';
import IdolPage from './pages/idols';
import VideoPage from './pages/videos';
import GroupAdminPage from './pages/groupsAdmin';

import NavigationBar from './components/navigation/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="groups" element={<GroupPage />} />
          <Route path="idols" element={<IdolPage />} />
          <Route path="videos" element={<VideoPage />} />
          <Route path="groupsAdmin" element={<GroupAdminPage />} />
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