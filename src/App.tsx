import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './shared/components/Navbar';
import ToDoListCard from './todolist/ToDoListCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/ongoing" element={<ToDoListCard />} />
        <Route path="/completed" element={<ToDoListCard />} />
        <Route path="/deleted" element={<ToDoListCard />} />
      </Routes>
    </div>
  );
}

export default App;
