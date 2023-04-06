import { NavLink, Outlet } from 'react-router-dom';
// 윤정님 천재에요

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? 'green' : '',
    fontSize: isActive ? '2rm' : '',
  };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to='/' style={activeStyle}>
            Home
          </NavLink>
        </li>

        <li>
          {/* <a>요소는 전체를 렌더링하므로 <Link>또는 <NavLink>를 사용 */}
          {/* <a href='./about'>About</a>  사용x*/}
          {/* <NavLink to='/about' style={activeStyle}> */}
          <NavLink to='/about?name=황윤정&loc=제부도' style={activeStyle}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard' style={activeStyle}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to='/product' style={activeStyle}>
            Product
          </NavLink>
        </li>

        <li>
          <NavLink to='nothing-here' style={activeStyle}>
            Nothing Here
          </NavLink>
        </li>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
