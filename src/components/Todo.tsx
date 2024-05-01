import { useState } from 'react';
import './Todo.css';
import EditTodo from './EditTodo';

type TodoProps = {
  text: string;
  deleteTodo: (str: string) => void;
  id: string;
  completeTodo: (str: string) => void;
  isCompleted: boolean;
};

const Todo: React.FC<TodoProps> = ({
  text,
  deleteTodo,
  id,
  completeTodo,
  isCompleted,
}) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  return (
    <div className={isCompleted ? 'todoCompleted isComplete' : 'todo'}>
      {isOpenEdit ? (
        <EditTodo text={text} id={id} setIsOpenEdit={setIsOpenEdit} />
      ) : (
        <p>{text}</p>
      )}
      <div>
        <button className="complete__btn" onClick={() => completeTodo(id)}>
          Complete
        </button>
        <button
          className="edit__btn"
          onClick={() => setIsOpenEdit(!isOpenEdit)}
        >
          Edit
        </button>
        <button className="delete__btn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
