import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [isClickOnBtn, setIsClickOnBtn] = useState(false);
  const [selectFilter, setSelectFilter] = useState('all');
  console.log(selectFilter);
  console.log(isClickOnBtn);

  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <TodoForm
        isOnClickBtn={isClickOnBtn}
        setIsClickOnBtn={setIsClickOnBtn}
        selectFilter={selectFilter}
        setSelectFilter={setSelectFilter}
      />
      <TodoList isClickOnBtn={isClickOnBtn} selectFilter={selectFilter} />
    </div>
  );
}

export default App;
