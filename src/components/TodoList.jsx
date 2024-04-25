import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector(selectTodo);
  console.log(todos);
  return (
    <div>
      {todos.map((todos) => {
        return <Todo text={todos.text} key={todos.id} />;
      })}
    </div>
  );
};

export default TodoList;
