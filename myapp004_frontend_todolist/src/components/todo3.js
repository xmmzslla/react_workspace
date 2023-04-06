import { useDispatch, useSelector } from 'react-redux';
import { store } from '../reduxs/store';
import Label from './label3';
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../apiurl';
import { getAction, getTodos } from '../reduxs/action';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getAction(dispatch);
  }, []);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
