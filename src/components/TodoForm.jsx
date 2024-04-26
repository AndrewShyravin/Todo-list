import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import createTodo from '../utils/createTodo';
import './TodoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (text) {
      dispatch(addTodo(createTodo(text)));
    }
    setText('');
  };
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
    </div>
  );
};

export default TodoForm;
