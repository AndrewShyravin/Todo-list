import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from './hooks/hooks';
import { addTodo } from '../redux/todoSlice';
import createTodo from '../utils/createTodo';
import Filter from './Filter';
import './TodoForm.css';

type TodoFormProps = {
  isOnClickBtn: boolean;
  setIsClickOnBtn: (bool: boolean) => void;
  selectFilter: string;
  setSelectFilter: (str: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({
  isOnClickBtn,
  setIsClickOnBtn,
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
  const filterCompleteTodoHandler = () => {
    setIsClickOnBtn(!isOnClickBtn);
  };

  useEffect(() => {
    if (
      selectFilter ||
      selectFilter === 'completed' ||
      selectFilter === 'uncompleted'
    ) {
      filterCompleteTodoHandler();
    }
  }, [selectFilter]);

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
