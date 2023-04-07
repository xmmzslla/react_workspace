import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../apiurl';

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    memberEmail: '',
    memberPass: '',
  });

  const { memberEmail, memberPass } = inputs;

  const handleValueChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    //입력한 데이터를 보냄
    e.preventDefault();
    await axios
      .post(`${baseUrl}/login`, inputs, config)
      .then((response) => {
        console.log('response:', response.data);
        // let jwToken = response.headers['Authorization'];
        let jwtToken = response.headers.get('Authorization');
        console.log('jwtToken', jwtToken);

        let jwtMemberName = response.data.memberName;
        let jwtMemberEmail = response.data.memberEmail;
        let jwtAuthRole = response.data.authRole;

        localStorage.setItem('Authorization', jwtToken);
        localStorage.setItem('memberEmail', jwtMemberEmail);
        localStorage.setItem('memberName', jwtMemberName);
        localStorage.setItem('authRole', jwtAuthRole);
        localStorage.setItem('isLogin', true);

        setInputs({ memberEmail: '', memberPass: '' });
      })
      .then((response) => {
        // navigator('/');
        window.location.replace('/');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='container text-center mt-5'>
      <div className='mx-5'>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-1'>
            <input
              type='email'
              name='memberEmail'
              className='form-control'
              value={memberEmail}
              placeholder='이메일'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mt-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              value={memberPass}
              placeholder='비밀번호'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='mt-1'>
            <button type='submit' className='btn btn-primary'>
              로그인
            </button>
            <Link className='btn btn-primary' to='/joinadd'>
              회원 가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
