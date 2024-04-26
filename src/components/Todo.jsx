import './Todo.css';
import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todoSlice';
import { useState } from 'react';

const Todo = (props) => {
  const { text, deleteTodo, id } = props;
  const [isComplete, setIsComplete] = useState('todo');
  useSelector(selectTodo);
  return (
    <div className={isComplete}>
      <p>{text}</p>
      <div>
        <button
          className="complete__btn"
          onClick={() => setIsComplete('todoCompleted isComplete')}
        >
          Complete
        </button>
        <button className="delete__btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
