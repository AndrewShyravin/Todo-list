import './Todo.css';
import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todoSlice';

const Todo = (props) => {
  useSelector(selectTodo);
  const { text, deleteTodo, id } = props;
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </div>
  );
};

export default Todo;
