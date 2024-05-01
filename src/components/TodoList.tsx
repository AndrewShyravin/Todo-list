import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { completeTodo, deleteTodo, selectTodo } from '../redux/todoSlice';
import Todo from './Todo';
import './TodoList.css';
import {
  selectCompletedFilterdData,
  selectUncompletedFilterdData,
} from '../redux/selectors';

type FilterOption = 'all' | 'completed' | 'uncompleted' | string;

type TodoListProps = {
  selectFilter: FilterOption;
};

const TodoList: React.FC<TodoListProps> = ({ selectFilter }) => {
  const todos = useAppSelector(selectTodo);
  const selectCompletedTodos = useAppSelector(selectCompletedFilterdData);
  const selectUncompletedTodos = useAppSelector(selectUncompletedFilterdData);
  const dispatch = useAppDispatch();
  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const completeTodoHandler = (id: string) => {
    dispatch(completeTodo(id));
  };
  const direvedTodo =
    selectFilter === 'all'
      ? todos
      : selectFilter === 'completed'
      ? selectCompletedTodos
      : selectUncompletedTodos;

  return (
    <div className="todos__list">
      {<p>Todo list is epmty</p> &&
        direvedTodo.map((todo) => {
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
