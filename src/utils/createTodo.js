import { v4 as uuidv4 } from 'uuid';

const createTodo = (text) => {
  return {
    text,
    id: uuidv4(),
    isCompleted: false,
  };
};

export default createTodo;
