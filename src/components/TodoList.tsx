import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { completeTodo, deleteTodo, selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';
import {
  selectCompletedFilterdData,
  selectUncompletedFilterdData,
} from '../redux/selectors';

interface TodoListProps {
  isClickOnBtn: boolean;
  selectFilter: string;
}

const TodoList: React.FC<TodoListProps> = ({ isClickOnBtn, selectFilter }) => {
  const todos = useAppSelector(selectTodo);
  const selectCompletedTodos = useAppSelector(selectCompletedFilterdData);
  const selectUncompletedTodos = useAppSelector(selectUncompletedFilterdData);
  console.log(selectCompletedTodos);
  console.log(selectUncompletedTodos);
  console.log(todos);
  const dispatch = useAppDispatch();
  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const completeTodoHandler = (id: string) => {
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
        filteredTodos.map(
          (todo: { text: string; id: string; isCompleted: boolean }) => {
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
          }
        )}
    </div>
  );
};

export default TodoList;
