import Navbar from './shared/components/Navbar';
import ToDoListCard from './todolist/ToDoListCard';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <ToDoListCard />
    </div>
  );
}

export default App;
