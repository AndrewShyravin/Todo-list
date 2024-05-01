import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addTodo } from '../redux/todoSlice';
import createTodo from '../utils/createTodo';
import Filter from './Filter';
import './TodoForm.css';

type FilterOption = 'all' | 'completed' | 'uncompleted' | string;

type TodoFormProps = {
  selectFilter: FilterOption;
  setSelectFilter: (str: FilterOption) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({
  selectFilter,
  setSelectFilter,
}) => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text) {
      dispatch(addTodo(createTodo(text)));
    }
    setText('');
  };

  return (
    <div className="todo__form">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Введите новую задачу"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Filter selectFilter={selectFilter} setSelectFilter={setSelectFilter} />
    </div>
  );
};

export default TodoForm;
