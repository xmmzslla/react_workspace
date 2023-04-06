import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertAction } from '../reduxs/action';

const Input = () => {
  const inputRef = useRef('');
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    insertAction(input);
    setInput();
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handleChangeText}
        ref={inputRef}
      />
      <input type='submit' value='Create' />
    </form>
  );
};
export default Input;
