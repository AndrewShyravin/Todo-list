import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
  const { todos, deleteTodo } = props;
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
        );
      })}
    </div>
  );
};

export default TodoList;
