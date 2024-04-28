import './Todo.css';

const Todo = (props) => {
  const { text, deleteTodo, id, completeTodo, isCompleted } = props;
  return (
    <div className={isCompleted ? 'todoCompleted isComplete' : 'todo'}>
      <p>{text}</p>
      <div>
        <button className="complete__btn" onClick={() => completeTodo(id)}>
          Complete
        </button>
        <button className="delete__btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
