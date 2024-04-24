import './Todo.css';

const Todo = (props) => {
  const { todo } = props;
  return <div>{todo}</div>;
};

export default Todo;
