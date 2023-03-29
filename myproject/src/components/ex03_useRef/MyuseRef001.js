/*
state : state변경 -> 리렌더링 발생 -> state초기화 x
ref : ref변경 ->  리렌더링 발생 x -> ref초기화 x
variable : variable -> 리렌더링 발생 x -> variable초기화 o

리렌더링 발생(컴포넌트 업데이트)
1. state가 바뀔 때
2. props가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. foreUpdate()로 강제로 렌더링을 트리거할 때

useRef()
1. 상태정보
2. DOM 접근

DOM을 꼭 사용해야하는 경우
1. 특정 input에 포커스 주기
2. Canvas 요소에 그림 그리기 등
*/

import { useRef, useState } from 'react';

const MyuseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
  };

  const upCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  const upCountLet = () => {
    countLet = countLet + 1;
    console.log('countLet:', countLet);
  };

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <p>variable : {countLet}</p>

      <p>
        <button onClick={upCountState}>State</button>
        <button onClick={upCountRef}>Ref</button>
        <button onClick={upCountLet}>variable</button>
      </p>
    </div>
  );
};

export default MyuseRef001;
