// 상태전달 : props
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/todo';
import Input from './components/input';

function App() {
  const inputRef = useRef('');

  const wrap = {
    with: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  let boardList = [
    { id: 1, todoname: '완벽하게 자기', completed: 0 },
    { id: 2, todoname: '끝내주게 숨쉬기', completed: 0 },
    { id: 3, todoname: '강아지 산책시키기', completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);
    setInput('');
  };

  const deleteTodo = (id) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     todo.id !== id;
    //   })
    // );

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <Input
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
        inputRef={inputRef}
      />

      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
