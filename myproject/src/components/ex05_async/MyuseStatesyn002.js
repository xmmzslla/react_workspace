import { useState } from 'react';
/*
React는 state가 변경이된 때마다 렌더링이 발생한다.
React는 렌더링이 발생되면 배치로해서 처리한다.
배치 16ms 단위로 처리한다.
useState()는 비동기화로 처리한다.
*/

const MyuseStatesyn002 = () => {
  const [number, setNumber] = useState(0);

  const handelUpNumber = () => {
    //state의 값을 순차적으로 변경할 때 콜백함수를 사용
    setNumber((number) => number + 3);
    console.log(number);

    setNumber((number) => number + 2);
    console.log(number);

    setNumber((number) => number + 1);
    console.log(number);
  };

  const handelDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handelUpNumber}>UP</button>
      <button>DOWN</button>
    </div>
  );
};
export default MyuseStatesyn002;
