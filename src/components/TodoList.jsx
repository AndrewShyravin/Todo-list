import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector(selectTodo);
  console.log(todos);
  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
};

export default TodoList;
