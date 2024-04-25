import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector(selectTodo);
  console.log(todos);
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {todos.map((todos) => {
        return (
          <Todo
            deleteTodo={deleteTodoHandler}
            text={todos.text}
            key={todos.id}
            id={todos.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
