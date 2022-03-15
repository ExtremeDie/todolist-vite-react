import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './shared/components/Navbar';
import ToDoListCard from './todolist/ToDoListCard';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ToDoListCard />} />
      </Routes>
    </div>
  );
}

export default App;
