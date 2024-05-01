import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todoSlice';
import './EditTodo.css';

type EditTodoProps = {
  id: string;
  setIsOpenEdit: (bool: boolean) => void;
  text: string;
};

const EditTodo: React.FC<EditTodoProps> = ({ id, setIsOpenEdit, text }) => {
  const [textEdit, setTextEdit] = useState(text);
  const dispatch = useDispatch();

  const editTextHandler = () => {
    dispatch(editTodo({ id, newText: textEdit }));
    setIsOpenEdit(false);
  };

  const handleEdit = (event: any) => {
    setTextEdit(event.target.value);
  };
  return (
    <div className="area__edit">
      <form>
        <input
          value={textEdit}
          placeholder="Редактирование задачи"
          onChange={handleEdit}
        />
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
      </form>
    </div>
  );
};

export default EditTodo;
