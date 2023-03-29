import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handelData = (e) => {
    console.log((data = data + 1));
  };

  const handelName = (e) => {
    console.log(e.target.value + 1);
    setNum(num + 1);
  };

  useEffect(() => {
    console.log('data:' + data);
  });

  return (
    <div>
      <input type='text' placeholder='data' onChange={handelData} />
      <input type='text' placeholder='num' onChange={handelName} />
      {/* onChange가 실행되면 handelName이 됨 */}
    </div>
  );
};

export default MyuseEffect002;
