import { v4 as uuidv4 } from 'uuid';

const createTodo = (text) => {
  return {
    text,
    id: uuidv4(),
  };
};

export default createTodo;
