import './Todo.css';
import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todoSlice';

const Todo = (props) => {
  useSelector(selectTodo);
  const { text, deleteTodo, id } = props;
  return (
    <div className="todo">
      <p>{text}</p>
      <div className="buttons">
        <button>Complete</button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
