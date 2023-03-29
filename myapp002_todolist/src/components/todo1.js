import Label from './label';

const Todo = (props) => {
  const { todos, updateTodo, deleteTodo } = props;

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
