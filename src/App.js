import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import GroupPage from './pages/groups';
import IdolPage from './pages/idols';
import VideoPage from './pages/videos';
import GroupAdminPage from './pages/groupsAdmin';
import UpdateGroup from './pages/UpdateGroup';
import AddGroup from './pages/AddGroup';
import ViewGroup from './pages/ViewGroup';

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
          <Route path="addGroup" element={<AddGroup />} />
          <Route path="updateGroup">
            <Route path=":groupId" element={<UpdateGroup />} />
          </Route>
          <Route path="viewGroup">
            <Route path=":groupId" element={<ViewGroup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;