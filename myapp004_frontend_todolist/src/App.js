import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');

  const wrap = {
    with: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '완벽하게 자기', completed: 0 },
  //   { id: 2, todoname: '끝내주게 숨쉬기', completed: 0 },
  //   { id: 3, todoname: '강아지 산책시키기', completed: 0 },
  // ];

  const [todos, setTodos] = useState([]); //db에 접근해서 가져옴
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      });
  };

  const deleteTodo = async (id) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     todo.id !== id;
    //   })
    // );

    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id) => {
    console.log('id:' + id);
    console.log(todos.filter((todo) => todo.id === id));

    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    console.log('completed:' + completed);

    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // async function getTodos(){};
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) // .get(baseUrl+'/todo/all') 공백있으면 안됨
      .then((response) => {
        console.log(response);
        console.log('11111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('22222222');
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
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
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed === 1 ? 'completed' : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
