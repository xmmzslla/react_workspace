import logo from './logo.svg';
import './App.css';
import MyJsx001 from './components/ex01_jsx/MyJsx001';
import MyJsx002 from './components/ex01_jsx/MyJsx002';
import MyJsx003 from './components/ex01_jsx/MyJsx003';
import MyJsx004 from './components/ex01_jsx/MyJsx004';
import MyJsx005 from './components/ex01_jsx/MyJsx005';
import MyBasic001 from './components/ex02_useState/MyBasic001';
import MyBasic002 from './components/ex02_useState/MyBasic002';
import MyBasic003 from './components/ex02_useState/MyuseState003';
import MyuseState003 from './components/ex02_useState/MyuseState003';
import MyuseState004 from './components/ex02_useState/MyuseState004';
import MyuseState005 from './components/ex02_useState/MyuseState005';
import MyuseState006 from './components/ex02_useState/MyuseState006';
import MyuseState007 from './components/ex02_useState/MyuseState007';
import MyuseRef001 from './components/ex03_useRef/MyuseRef001';
import MyuseRef002 from './components/ex03_useRef/MyuseRef002';
import MyuseEffect001 from './components/ex04_useEffect/MyuseEffect001';
import MyuseEffect002 from './components/ex04_useEffect/MyuseEffect002';
import MyuseStatesyn001 from './components/ex05_async/MyuseStatesyn001';
import MyuseStatesyn002 from './components/ex05_async/MyuseStatesyn002';
import Myprops001 from './components/ex06_props/Myprops001';
import Myprops002 from './components/ex06_props/Myprops002';
import Myprops003 from './components/ex06_props/Myprops003';
import Myprops004 from './components/ex06_props/Myprops004';
import MyuseContext01 from './components/ex07_context/MyuseContext01';

function App() {
  return (
    <div className='App'>
      {/* <MyJsx001 /> */}
      {/* <MyJsx002 /> */}
      {/* { <MyJsx003 />} */}
      {/* <MyJsx004 /> */}
      {/* <MyJsx005 /> */}

      {/* <MyBasic001 /> */}
      {/* <MyBasic002 /> */}
      {/* <MyuseState003 /> */}
      {/* <MyuseState004 /> */}
      {/* <MyuseState005 /> */}
      {/* <MyuseState006 /> */}
      {/* <MyuseState007 /> */}

      {/* <MyuseRef001 /> */}
      {/* <MyuseRef002 /> */}

      {/* <MyuseEffect001 /> */}
      {/* <MyuseEffect002 /> */}

      {/* <MyuseStatesyn001 /> */}
      {/* <MyuseStatesyn002 /> */}

      {/* <Myprops001 name='황윤정' /> */}
      {/* <Myprops002 name='황윤정' age='30' loc='부산' /> */}
      {/* <Myprops003 name='황윤정' age='30' loc='부산' /> */}
      {/* <Myprops004 name='황윤정' /> */}
      {/* <Myprops004 loc='부산' /> */}
      <MyuseContext01 />
    </div>
  );
}

//이거 안해서 오류 많이 난다. 잘 기억하기
export default App;
