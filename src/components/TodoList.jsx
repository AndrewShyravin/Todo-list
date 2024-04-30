import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo, selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';
import {
  selectCompletedFilterdData,
  selectUncompletedFilterdData,
} from '../redux/selectors';

const TodoList = ({ isClickOnBtn, selectFilter }) => {
  const todos = useSelector(selectTodo);
  const selectCompletedTodos = useSelector(selectCompletedFilterdData);
  const selectUncompletedTodos = useSelector(selectUncompletedFilterdData);
  console.log(selectCompletedTodos);
  console.log(selectUncompletedTodos);
  console.log(todos);
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const completeTodoHandler = (id) => {
    dispatch(completeTodo(id));
  };

  let filteredTodos;

  if (isClickOnBtn) {
    if (selectFilter === 'completed') {
      filteredTodos = selectCompletedTodos;
    } else if (selectFilter === 'uncompleted') {
      filteredTodos = selectUncompletedTodos;
    } else {
      // Если selectFilter равен 'all', то показываем все задачи
      filteredTodos = todos;
    }
  } else {
    // Если isClickOnBtn равен false, то показываем все задачи
    filteredTodos = todos;
  }

  console.log(filteredTodos);
  console.log(isClickOnBtn);

  return (
    <div className="todos__list">
      {<p>Todo list is epmty</p> &&
        filteredTodos.map((todo) => {
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
