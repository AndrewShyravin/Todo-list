import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import createTodo from '../utils/createTodo';
import Filter from './Filter';
import './TodoForm.css';

const TodoForm = ({ setIsClickOnBtn, selectFilter, setSelectFilter }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (text) {
      dispatch(addTodo(createTodo(text)));
    }
    setText('');
  };
  const filterCompleteTodoHandler = () => {
    setIsClickOnBtn((prev) => !prev);
  };

  useEffect(() => {
    if (
      selectFilter ||
      selectFilter === 'completed' ||
      selectFilter === 'uncompleted'
    ) {
      filterCompleteTodoHandler();
    }
  }, [selectFilter]);

  return (
    <div className="todo__form">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Введите новую задачу"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Filter selectFilter={selectFilter} setSelectFilter={setSelectFilter} />
    </div>
  );
};

export default TodoForm;
