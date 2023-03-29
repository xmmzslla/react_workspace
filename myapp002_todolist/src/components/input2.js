import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

const Input2 = () => {
  const { insertTodo, input, handelChangeText, inputRef } =
    useContext(InputContext);

  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handelChangeText}
        ref={inputRef}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default Input2;
