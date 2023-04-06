import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layout/BaseLayout';
import Home from './components/home';
import BoardList from './components/board/board_list';
import BoardView from './components/board/board_view';
import BoardWrite from './components/board/board_write';
import BoardUpdate from './components/board/board_update';
import JoinAdd from './components/members/join_add';
import LoginPage from './components/members/login';

function App() {
  return (
    <div className='container'>
      <h1>My shop</h1>

      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='Login' element={<LoginPage />} />
          <Route path='joinadd' element={<JoinAdd />} />

          <Route path='board/list/:currentPage' element={<BoardList />} />
          <Route path='board/view/:num' element={<BoardView />} />
          <Route path='board/write' element={<BoardWrite />} />
          <Route path='board/write/:num' element={<BoardWrite />} />
          <Route path='board/update/:num' element={<BoardUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
