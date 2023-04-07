import { useEffect } from 'react';

const LogOut = () => {
  // const navigator = useNavigate();
  useEffect(() => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogin');
    localStorage.clear();
    // navigator("/");
    window.location.replace('/');
  });
};
export default LogOut;
