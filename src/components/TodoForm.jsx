import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const textHandler = (event) => {
    setText(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
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
