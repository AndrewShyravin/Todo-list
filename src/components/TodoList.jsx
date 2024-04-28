import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo, selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';
import { selectFilteredData } from '../redux/selectors';

const TodoList = ({ isClickOnBtn }) => {
  const todos = useSelector(selectTodo);
  const selectTodos = useSelector(selectFilteredData);
  console.log(selectTodos);
  console.log(todos);
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const completeTodoHandler = (id) => {
    dispatch(completeTodo(id));
  };
  return (
    <div className="todos__list">
      {(isClickOnBtn ? selectTodos : todos).map((todo) => {
        return (
          <Todo
            deleteTodo={deleteTodoHandler}
            completeTodo={completeTodoHandler}
            text={todo.text}
            key={todo.id}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
