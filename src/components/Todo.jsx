import { useState } from 'react';
import './Todo.css';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todoSlice';

const Todo = (props) => {
  const { text, deleteTodo, id, completeTodo, isCompleted } = props;
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [textEdit, setTextEdit] = useState('');
  const dispatch = useDispatch();
  const editTextHandler = () => {
    dispatch(editTodo({ id, newText: textEdit }));
    setIsOpenEdit(false);
  };
  const handleEdit = (event) => {
    setTextEdit(event.target.value);
  };

  return (
    <div className={isCompleted ? 'todoCompleted isComplete' : 'todo'}>
      {isOpenEdit ? (
        <div className="area__edit">
          <textarea
            value={textEdit}
            placeholder={text}
            onChange={handleEdit}
          ></textarea>
          <div className="edit__buttons">
            <button className="save__btn" onClick={editTextHandler}>
              Save
            </button>
            <button
              className="cancel__btn"
              onClick={() => {
                setIsOpenEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
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
