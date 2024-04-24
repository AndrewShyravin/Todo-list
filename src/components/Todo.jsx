import './Todo.css';

const Todo = (props) => {
  const { todo } = props;
  return (
    <div>
      <h1>{todo}</h1>
      <button>delete</button>
    </div>
  );
};

export default Todo;
