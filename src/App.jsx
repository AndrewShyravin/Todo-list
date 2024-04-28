import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [isClickOnBtn, setIsClickOnBtn] = useState(false);
  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <TodoForm setIsClickOnBtn={setIsClickOnBtn} />
      <TodoList isClickOnBtn={isClickOnBtn} />
    </div>
  );
}

export default App;
