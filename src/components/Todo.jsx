import './Todo.css';

const Todo = (props) => {
  const { text } = props;
  return (
    <div>
      <h1>{text}</h1>
      <button>delete</button>
    </div>
  );
};

export default Todo;
