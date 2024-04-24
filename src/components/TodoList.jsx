import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
