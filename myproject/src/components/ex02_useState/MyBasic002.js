import { useState } from 'react';

const MyBasic002 = () => {
  // const[상태, 상태변경함수] = useState(초기값)

  //   반드시 대괄호에다가 넣어야함
  const [cnt, setCnt] = useState(0);

  //   e없어도 됨
  const handleClick = (e) => {
    setCnt(cnt + 1);
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyBasic002;
