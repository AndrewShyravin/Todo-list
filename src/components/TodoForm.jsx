import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import createTodo from '../utils/createTodo';
import './TodoForm.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const textHandler = (event) => {
    setText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(createTodo(text)));
    setText('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Введите новую задачу"
          value={text}
          onChange={textHandler}
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default TodoForm;
