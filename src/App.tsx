import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { FilterOption } from './types/FilterOption';

function App() {
  const [selectFilter, setSelectFilter] = useState<FilterOption>('all');

  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <TodoForm selectFilter={selectFilter} setSelectFilter={setSelectFilter} />
      <TodoList selectFilter={selectFilter} />
    </div>
  );
}

export default App;
