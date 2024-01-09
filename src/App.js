import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import GroupPage from './pages/groups';
import IdolPage from './pages/idols';
import GroupAdminPage from './pages/groupsAdmin';
import IdolsAdminPage from './pages/idolsAdmin';
import UpdateGroup from './pages/UpdateGroup';
import AddGroup from './pages/AddGroup';
import ViewGroup from './pages/ViewGroup';
import ViewIdol from './pages/ViewIdol';
import UpdateIdol from './pages/UpdateIdol';
import AddIdol from './pages/AddIdol';
import ViewSearch from './pages/ViewSearch';

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
          <Route path="groupsAdmin" element={<GroupAdminPage />} />
          <Route path="idolsAdmin" element={<IdolsAdminPage />} />
          <Route path="addGroup" element={<AddGroup />} />
          <Route path="updateGroup">
            <Route path=":groupId" element={<UpdateGroup />} />
          </Route>
          <Route path="addIdol" element={<AddIdol />} />
          <Route path="updateIdol">
            <Route path=":idolId" element={<UpdateIdol />} />
          </Route>
          <Route path="viewGroup">
            <Route path=":groupId" element={<ViewGroup />} />
          </Route>
          <Route path="viewIdol">
            <Route path=":idolId" element={<ViewIdol />} />
          </Route>
          <Route path="viewSearch">
            <Route path=":groupId" element={<ViewSearch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;