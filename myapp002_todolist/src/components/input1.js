const Input = (props) => {
  const { insertTodo, input, handelChangeText, inputRef } = props;
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

export default Input;
