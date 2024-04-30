import { useState } from 'react';
import './Todo.css';
import EditTodo from './EditTodo';

const Todo = ({ text, deleteTodo, id, completeTodo, isCompleted }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  return (
    <div className={isCompleted ? 'todoCompleted isComplete' : 'todo'}>
      {isOpenEdit ? (
        <EditTodo id={id} setIsOpenEdit={setIsOpenEdit} />
      ) : (
        <p>{text}</p>
      )}
      <div>
        <button className="complete__btn" onClick={() => completeTodo(id)}>
          Complete
        </button>
        <button className="delete__btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
        <button
          className="edit__btn"
          onClick={() => setIsOpenEdit(!isOpenEdit)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
