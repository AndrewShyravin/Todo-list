import './Todo.css';

const Todo = (props) => {
  const { todo, deleteTodo, index } = props;
  return (
    <div>
      <h1>{todo}</h1>
      <button onClick={() => deleteTodo(index)}>delete</button>
    </div>
  );
};

export default Todo;
